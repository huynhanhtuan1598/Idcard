import { makeStyles } from '@mui/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/button/button';
import { EditThemeForm } from './edit-theme-form';

const useStyles = makeStyles({
    button: {
        textTransform: 'inherit',
        color: 'inherit',
    },
});

function EditTheme() {
    const { t } = useTranslation('theme');
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const toggle = () => setOpen((o) => !o);

    return (
        <>
            <Button onClick={toggle} className={classes.button}>
                {t('edit')}
            </Button>

            <EditThemeForm open={open} toggle={toggle} />
        </>
    );
}

export { EditTheme };
