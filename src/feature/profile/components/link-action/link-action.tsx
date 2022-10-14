import React, { ReactNode } from 'react';
// import { CopyToClipboard } from '../../../../components';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@mui/styles';
import { CopyToClipboard } from '../../../../components/copy-to-clipboard/copy-to-clipboard';

interface Props {
    type?: string;
    href: string;
    nameType?: string;
    onClick?: () => void;
    children: ReactNode;
    clickReport?: () => void;
}

const useStyles = makeStyles({
    wrap: {
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background .3s ease-in-out',
        display: 'block',
        overflow: 'hidden',
    },

    inner: {},
});

const LinkAction = ({
    children,
    onClick,
    href,
    type = 'default',
    nameType,
    clickReport,
}: Props) => {
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const handleCopy = () => {
        enqueueSnackbar('Đã sao chép', { variant: 'success' });
    };

    const getHref = () => {
        // if (type === 'social') {
        //     if (nameType === 'skype') {
        //         return `skype:${href}?chat`;
        //     }
        //     return href;
        // }

        if (type === 'phone') {
            return `tel:${href}`;
        }
        if (type === 'email') {
            return `mailto:${href}`;
        }

        if (type === 'address') {
            const query = encodeURI(href);
            return `https://www.google.com/maps/search/?api=1&query=${query}`;
        }

        return href;
    };

    const renderContent = () => {
        if (['social', 'website', 'address'].includes(type)) {
            return (
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={getHref()}
                    className={classes.wrap}
                >
                    <div className={classes.inner}>{children}</div>
                </a>
            );
        }

        if (['phone', 'email', 'ecommerce'].includes(type)) {
            return (
                <a
                    href={getHref()}
                    className={classes.wrap}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={classes.inner}>{children}</div>
                </a>
            );
        }

        return (
            <div className={classes.wrap}>
                <div className={classes.inner}>
                    <CopyToClipboard text={href} onCopy={handleCopy}>
                        {children}
                    </CopyToClipboard>
                </div>
            </div>
        );
    };

    return <div onClick={clickReport}>{renderContent()}</div>;
};

export { LinkAction };
