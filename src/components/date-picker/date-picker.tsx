import {
    Box,
    Button,
    Container,
    Drawer,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import moment from 'moment';
import { ReactElement, useMemo, useState } from 'react';
import { Calendar } from 'react-calendar';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '../context/language';
// import { useChangeLanguage } from '../context';

interface Props {
    children?: ReactElement;
    onChange?: (value?: Date) => void;
    defaultValue?: Date;
}

const DatePicker = ({
    children,
    onChange,
    defaultValue = new Date(),
}: Props) => {
    const { t } = useTranslation('common');
    const { i18n } = useChangeLanguage();
    const [value, setValue] = useState<Date | undefined | null>(defaultValue);
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => setOpen((o) => !o);

    const handleChange = (val?: Date) => {
        setValue(val);
        onChange && onChange(val);
        toggle();
    };

    const clearDate = () => {
        handleChange();
    };

    const date = !!defaultValue ? defaultValue : new Date();

    const day = +moment(date).format('DD');
    const month = +moment(date).format('MM');
    const year = +moment(date).format('YYYY');

    const calendarValue = new Date(year, month - 1, day);

    const locale = useMemo(
        () => (i18n.language === 'vi' ? 'vi-VN' : 'en-US'),
        [i18n.language]
    );

    const renderChildren = children || (
        <TextField
            value={moment(value).format('YYYY-MM-DD')}
            type="date"
            onClick={(e) => e.preventDefault()}
        />
    );

    return (
        <>
            <span onClick={toggle}>{renderChildren}</span>

            <Drawer open={open} anchor="bottom" onClose={toggle}>
                <Container maxWidth="sm">
                    <Box py={2} mx="auto" sx={{ maxWidth: 350 }}>
                        <Grid spacing={2} container>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="span">
                                    {t('selectDate')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Calendar
                                    value={calendarValue}
                                    locale={locale}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justifyContent="space-between">
                                    <Grid item></Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            onClick={clearDate}
                                        >
                                            {t('delete')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Drawer>
        </>
    );
};

export { DatePicker };
