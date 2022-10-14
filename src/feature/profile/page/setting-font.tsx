import CheckIcon from '@mui/icons-material/Check';
import {
    Container,
    List,
    ListItem,
    ListItemProps,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material';
import {debounce} from 'lodash'
import { blue } from '@mui/material/colors';
import {  useEffect, useMemo, useState  } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../components/context/auth';
import { useMessage } from '../../../components/message/notification';
import { GoogleFont, useAllGoogleFontQuery, useChangeConfigThemeMutation } from '../../../components/generated/graphql';
import { Spinner } from '../../../components/spinner/spinner';
import WebFont from 'webfontloader';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
// import WebFont from 'webfontloader';
// import { AppBar, Back, Spinner, useMessage } from '../../../components';
// import { useAuth } from '../../../context';
// import {
//     GoogleFont,
//     useAllGoogleFontQuery,
//     useChangeConfigThemeMutation,
// } from '../../../generated/graphql';

interface ListItemFontProps extends ListItemProps {
    font: GoogleFont;
    selected?: boolean;
}

const ListItemFont = ({ font, selected }: ListItemFontProps) => {
    const { user } = useAuth();
    const { t } = useTranslation('theme');

    const message = useMessage();

    const [handleChangeConfigTheme, { loading }] = useChangeConfigThemeMutation(
        {
            onError(error) {
                console.log(error);
                message(t('change_config.error'), { variant: 'error' });
            },
            onCompleted(data) {
                message(t('change_config.success'), {
                    variant: 'success',
                });
            },
        }
    );

    const handleSelectFont = () => {
        handleChangeConfigTheme({
            variables: {
                changeConfigThemeInput: {
                    color: user?.themeConfig?.color,
                    colorIcon: user?.themeConfig?.colorIcon,
                    backgroundColor: user?.themeConfig?.backgroundColor,

                    fontFamily: font.family,
                },
            },
        });
    };

    const secondaryActionRender = loading ? (
        <Spinner size={20} />
    ) : selected ? (
        <CheckIcon sx={{ color: blue[500] }} />
    ) : null;

    return (
        <ListItem
            selected={selected || loading}
            button
            onClick={handleSelectFont}
            secondaryAction={secondaryActionRender}
        >
            <ListItemText>
                <Typography style={{ fontFamily: font.family }}>
                    {font.family}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};

interface ListFontProps {
    fonts: GoogleFont[];
}
const ListFont = ({ fonts }: ListFontProps) => {
    const { user } = useAuth();

    useEffect(() => {
        if (fonts && fonts.length > 0) {
            const families = fonts.map((f) => f.family);

            WebFont.load({
                loading() {},
                google: {
                    families,
                },
            });
        }
    }, [fonts]);

    return (
        <List>
            {fonts.map((item) => {
                const selected = user?.themeConfig?.fontFamily === item.family;

                return (
                    <ListItemFont
                        font={item}
                        key={item.family}
                        selected={!!selected}
                    />
                );
            })}
        </List>
    );
};

const SettingFont = () => {
    const { t } = useTranslation('theme');
    const [text, setText] = useState<string>();

    const { loading, data } = useAllGoogleFontQuery();

    const handleChangeText = debounce((value: string) => {
        setText(value);
    }, 300);

    const fonts = useMemo(() => data?.allGoogleFont || [], [data]);

    const fontsData =
        text && text.length > 0
            ? fonts.filter((item) =>
                  item.family.toLowerCase().includes(text.toLowerCase())
              )
            : fonts;

    const renderContent = () => {
        if (loading) {
            return <Spinner sx={{ mt: 3 }} />;
        }

        return <ListFont fonts={fontsData} />;
    };

    return (
        <>
            <AppBar
                leftContent={<Back sx={{ mr: 1 }} to="/appearance" />}
                title={t('appearance.fontFamily')}
                position="static"
            />

            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    onChange={(e) =>handleChangeText(e.target.value)}
                    label={t('appearance.fontFamily.search')}
                    margin="dense"
                />
                {renderContent()}
            </Container>
        </>
    );
};

export default SettingFont;
