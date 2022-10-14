import { makeStyles } from '@mui/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '../../components/context/language';
import { availableLanguages } from '../../i18n/i18n';

const useStyle = makeStyles({
    wrap: {
        width: 66,
        height: 36,
        background: '#f1f1f1',
        borderRadius: 30,
        border: '1px solid #165fe6',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    switch: {
        width: 30,
        height: 30,
        background: '#165fe6',
        position: 'absolute',
        top: 2,
        left: 2,
        borderRadius: 30,
        transition: 'all .3s',
    },
    span: {
        display: 'flex',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 600,
        color: '#165fe6',
    },
});

function ChangeLanguage() {
    const classes = useStyle();
    const { changeLanguage } = useChangeLanguage();
    const { i18n } = useTranslation();

    const toggle = () => {
        if (i18n.language === 'vi') {
            changeLanguage('en');
        } else {
            changeLanguage('vi');
        }
    };

    return (
        <div className={classes.wrap} onClick={toggle}>
            {availableLanguages.map((language) => (
                <span className={classes.span} key={language}>
                    {language}
                </span>
            ))}
            <div
                className={classes.switch}
                style={{
                    transform:
                        i18n.language === 'vi'
                            ? `translateX(30px)`
                            : 'translateX(0px)',
                }}
            />
        </div>
    );
}

export { ChangeLanguage };
