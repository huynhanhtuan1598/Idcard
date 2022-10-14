import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ETypeDate } from '../../../../../src/components/context/report';
import { useReport } from '../../../../../src/components/context/report';
import { SelectTypeDate } from './select-type-date';

function TypeDateReport() {
    const { t } = useTranslation('report');
    const { typeDate } = useReport();

    const labels = {
        [ETypeDate.Day]: t('day'),
        [ETypeDate.Week]: t('week'),
        [ETypeDate.Month]: t('month'),
        [ETypeDate.Year]: t('year'),
    };

    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h6">{labels[typeDate]}</Typography>
            </Grid>
            <Grid item>
                <SelectTypeDate />
            </Grid>
        </Grid>
    );
}

export { TypeDateReport };
