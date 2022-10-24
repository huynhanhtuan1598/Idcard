import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import parse from 'html-react-parser';
import { get } from 'lodash';
import { CSSProperties } from 'react';
import { ThemeConfig, UserInfoFragment } from '../generated/graphql';
// import reactStringReplace from 'react-string-replace';
import reactStringReplace from 'react-string-replace';
// import { IThemeColorTemplate } from '../../feature/admin/types';
// import { ThemeConfig, UserInfoFragment } from '../../generated/graphql';
// import { getHtmlList } from '../utils';
// import { CompLoadFont } from '../comp-load-font';
// import avatarBlank from './assets/avatar-blank.jpeg';
import { BackgroundImage } from './background-image';
import { DownloadFile } from './download';
import { getHtmlList } from '../utils/getTemplate';
import { CompLoadFont } from '../comp-load-font/comp-load-font';

const useStyle = makeStyles({
    content: {
        position: 'relative',
        zIndex: 10,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 200,
    },
});

interface Props {
    profile?: UserInfoFragment;
    theme?: ThemeConfig; // IThemeColorTemplate;
    template: string;
    background?: string;
    isFixedContact?: boolean;
    noClick?: boolean;
    showSave?: boolean;
}

export const defaultTheme: ThemeConfig = {
    color: blue[600],
    colorIcon: blue[600],
};

const TemplateRender = ({
    profile,
    template,
    background,
    theme = defaultTheme,
    isFixedContact = true,
    noClick = true,
    showSave = true,
}: Props) => {
    const classes = useStyle();

    const renderTemplate = () => {
        if (!profile) {
            return <div />;
        }

        const value = template;

        const imageAvatar = get(profile, 'avatarS3.url') || '';

        let formatTempale = reactStringReplace(
            value,
            /({name}|{avatar}|{career_position}|{list}|{company})/g,
            (match) => {
                if (match === '{name}') {
                    let headingStyle: CSSProperties = {};
                    const headingColor = theme.headingColor || theme.color;

                    if (headingColor) {
                        headingStyle.color = headingColor;
                    }

                    return (
                        <div className="name" style={headingStyle}>
                            {get(profile, 'fullname')}
                        </div>
                    );
                }
                if (match === '{avatar}') {
                    const borderWidth = profile?.avatarConfig?.borderWidth || 0;
                    const borderRadius =
                        profile?.avatarConfig?.borderRadius || 50;

                    const borderColor =
                        profile?.avatarConfig?.borderColor || 'transparent';
                    const boxShadow = profile?.avatarConfig?.boxShadow || 0;
                    const backgroundColor =
                        profile?.avatarConfig?.backgroundColor || 'transparent';

                    const styleAvatar: CSSProperties = {
                        backgroundColor,
                        border: `${borderWidth}px solid ${borderColor}`,
                        borderRadius: `${borderRadius}%`,
                        boxShadow: `0 0 ${boxShadow}px rgba(11,37,75,.5)`,
                    };
                    return (
                        <div className="avatar">
                            <img src={imageAvatar} alt="" style={styleAvatar} />
                        </div>
                    );
                }

                let styleHeadingSub: CSSProperties = {};

                const headingSubColor = theme.headingSubColor || theme.color;
                if (headingSubColor) {
                    styleHeadingSub.color = headingSubColor;
                }

                if (match === '{career_position}') {
                    return (
                        <div
                            className="career_position"
                            style={styleHeadingSub}
                        >
                            {get(profile, 'career_position')}
                        </div>
                    );
                }
                if (match === '{company}') {
                    return (
                        <div className="company" style={styleHeadingSub}>
                            {get(profile, 'company')}
                        </div>
                    );
                }
                if (match === '{list}') {
                    return getHtmlList(get(profile, 'list'), {
                        ...defaultTheme,
                        ...theme,
                    }
                    );
                }
                return get(profile, 'fullname');
            }
        );

        formatTempale = formatTempale.map((item, index) => {
            return (
                <div key={index}>
                    {typeof item === 'string' ? parse(item) : item}
                </div>
            );
        });

        return <div>{formatTempale}</div>;
    };

    let style: CSSProperties = {
        minHeight: '100vh',
        position: 'relative',
    };

    const backgroundColorConfig = get(theme, 'backgroundColor');

    if (backgroundColorConfig && backgroundColorConfig.length > 0) {
        style.backgroundColor = backgroundColorConfig;
    }

    const fontFamily = get(theme, 'fontFamily');

    const renderBackground = () => {
        if (background && background.length > 0) {
            return (
                <BackgroundImage
                    background={background}
                    isDemo={!isFixedContact}
                />
            );
        }
        return <></>;
    };

    return (
        <div style={style} className="wrap-template-render">
            {renderBackground()}
            <div className={classes.content}>
                {!!fontFamily ? (
                    <CompLoadFont fonts={[fontFamily]}>
                        {renderTemplate()}
                    </CompLoadFont>
                ) : (
                    renderTemplate()
                )}
                {showSave && (
                    <DownloadFile
                        userId={profile?._id as string}
                        color={theme.colorIcon as string}
                        isFixed={isFixedContact}
                    />
                )}

                {noClick && <div className={classes.overlay} />}
            </div>
        </div>
    );
};

export { TemplateRender };
