import { Box, Container, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { get } from 'lodash';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
import { useAuth } from '../../../components/context/auth';
import { SettingAvatar } from '../components/setting-avatar/setting-avatar';
import { ListAvatar } from '../components/change-avatar/list-avatar';
import { MainAvatar } from '../components/change-avatar/main-avatar';
import { ProviderEditAvatarContext } from '../state/edit-avatar/context';
import { useEditAvatar } from '../state/edit-avatar/context';

const Avatar = () => {
    const { user } = useAuth();

    const {
        borderRadius,
        borderColor,
        borderWidth,
        backgroundColor,
        boxShadow,
    } = useEditAvatar();

    const avatarConfig = {
        borderRadius,
        borderColor,
        borderWidth,
        backgroundColor,
        boxShadow,
    };

    return (
        <MainAvatar
            avatarConfig={avatarConfig}
            src={get(user, ['avatarS3', 'url'])}
        />
    );
};

const EditAvatar = () => {
    const { t } = useTranslation('editAvatar');
    const tabs: Array<{ label: string; content: ReactNode; key: number }> = [
        {
            label: t('tab.image'),
            content: <ListAvatar callback={() => {}} />,
            key: 0,
        },
        {
            label: t('tab.setting'),
            content: <SettingAvatar />,
            key: 1,
        },
    ];
    const [value, setValue] = useState(tabs[0].key);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ProviderEditAvatarContext>
            <>
                <AppBar
                    leftContent={<Back to="/profile" />}
                    sx={{ mb: 5 }}
                    title={t('title')}
                    position="static"
                />
                <Container maxWidth="sm">
                    <Grid container flexDirection="column">
                        <Grid item xs={12} sx={{ pb: 5 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    centered
                                >
                                    {tabs.map((item) => (
                                        <Tab
                                            style={{ fontWeight: 500 }}
                                            label={item.label}
                                            key={item.key}
                                        />
                                    ))}
                                </Tabs>

                                <Box sx={{ py: 3 }}>{tabs[value].content}</Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </>
        </ProviderEditAvatarContext>
    );
};

export default EditAvatar;
