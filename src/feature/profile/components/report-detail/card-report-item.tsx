import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../../../components/constants/theme';
import { useAuth } from '../../../../../src/components/context/auth';
import { getListContact } from '../../../../feature/profile/utils/getListContact';
import { renderLogoContact } from '../../../../feature/profile/utils/renderLogoContact';
import { Chart } from './chart';

const useStyle = makeStyles((theme) => ({
    card: {
        // padding: theme.spacing(2),
        padding: 15,
    },
    title: {},
    chart: {
        // marginTop:  theme.spacing(1),
        marginTop: 15,
    },
    label: {
        fontSize: 14,
    },
    content: {
        fontWeight: 700,
        fontSize: 14,
    },
}));

interface Props {
    item: any;
    expanded?: boolean;
    toggleExpand: (idItem: string) => void;
}

const CardReportItem = memo(
    ({ item, expanded = false, toggleExpand }: Props) => {
        const { i18n } = useTranslation();
        const { user } = useAuth();

        const classes = useStyle();

        function handleChange() {
            toggleExpand(item._id);
        }

        const contactItem: any = get(getListContact(item.type), item.name);

        if (!contactItem) {
            return null;
        }

        const label =
            item.type === 'bank'
                ? contactItem.shortname
                : `${
                      typeof contactItem.name === 'string'
                          ? contactItem.name
                          : contactItem.name[i18n.language]
                  } ${
                      item.type === 'website' && item.isDefault
                          ? '(Mặc định)'
                          : ''
                  }`;

        const content = item.owner
            ? `${item.owner} - ${item.content}`
            : item.shortName
            ? item.shortName
            : item.content;

        return (
            <Accordion
                TransitionProps={{ unmountOnExit: true }}
                expanded={expanded}
                onChange={handleChange}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid
                        spacing={2}
                        container
                        className={classes.title}
                        alignItems="center"
                    >
                        <Grid item style={{ color: COLORS.blue }} xs={2}>
                            {renderLogoContact(item.type, contactItem)}
                        </Grid>

                        <Grid item xs={10}>
                            <Typography className={classes.content}>
                                {label}
                            </Typography>
                            <Typography className={classes.label}>
                                {content}
                            </Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    {expanded && (
                        <div style={{ flex: 1 }}>
                            <Chart
                                userId={get(user, '_id') as string}
                                itemId={item._id}
                            />
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
        );
    }
);

export { CardReportItem };
