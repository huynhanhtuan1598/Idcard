import {
    AppBar,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from '../../../react-router-dom';
import { FormAddress } from '../components/form-add-contact/form-address';
import { FormBank} from '../components/form-add-contact/form-bank';
import { FormEmail} from '../components/form-add-contact/form-mail';
import { FormPhoneNumber} from '../components/form-add-contact/form-phone-number';
import { FormServices} from '../components/form-add-contact/form-service';
import { FormSocial} from '../components/form-add-contact/form-social';
import { FormTaxCode} from '../components/form-add-contact/form-tax-code';
import { FormWebsite} from '../components/form-add-contact/form-website';
import { FormEcommerce,} from '../components/form-add-contact/form-ecommerce';
import { makeStyles } from '@mui/styles';

enum InfomationType {
    phoneNumber = 'phoneNumber',
    email = 'email',
    website = 'website',
    social = 'social',
    bank = 'bank',
    service = 'service',
    address = 'address',
    taxcode = 'taxcode',
    ecommerce = 'ecommerce',
}
interface IInfomation {
    type: InfomationType;
    title: string;
    heading: string;
    text: string;
}

const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
        marginBottom: 20,
    },

    leftContent: {
        flexGrow: 1,
        fontSize: 16,
    },
});

function AddContactItem() {
    const { t } = useTranslation('add_contact');
    const classes = useStyle();
    const params = useParams();

    const infomations: IInfomation[] = [
        {
            type: InfomationType.phoneNumber,
            title: t('phoneNumber.title'),
            heading: t('phoneNumber.heading'),
            text: t('phoneNumber.description'),
        },
        {
            type: InfomationType.email,
            title: t('email.title'),
            heading: t('email.heading'),
            text: t('email.description'),
        },

        {
            type: InfomationType.social,
            title: t('social.title'),
            heading: t('social.heading'),
            text: t('social.description'),
        },
        {
            type: InfomationType.website,
            title: t('website.title'),
            heading: t('website.heading'),
            text: t('website.description'),
        },
        {
            type: InfomationType.bank,
            title: t('bank.title'),
            heading: t('bank.heading'),
            text: t('bank.description'),
        },
        {
            type: InfomationType.service,
            title: t('service.title'),
            heading: t('service.heading'),
            text: t('service.description'),
        },
        {
            type: InfomationType.address,
            title: t('address.title'),
            heading: t('address.heading'),
            text: t('address.description'),
        },
        {
            type: InfomationType.taxcode,
            title: t('taxcode.title'),
            heading: t('taxcode.heading'),
            text: t('taxcode.description'),
        },
        {
            type: InfomationType.ecommerce,
            title: t('ecommerce.title'),
            heading: t('ecommerce.heading'),
            text: t('ecommerce.description'),
        },
    ];

    const infomation = infomations.find((item) => item.type === params.type);

    if (!infomation) {
        return <div></div>;
    }

    const renderForm = () => {
        if (infomation.type === InfomationType.phoneNumber) {
            return <FormPhoneNumber />;
        }

        if (infomation.type === InfomationType.email) {
            return <FormEmail />;
        }

        if (infomation.type === InfomationType.website) {
            return <FormWebsite />;
        }

        if (infomation.type === InfomationType.social) {
            return <FormSocial />;
        }

        if (infomation.type === InfomationType.bank) {
            return <FormBank />;
        }

        if (infomation.type === InfomationType.service) {
            return <FormServices />;
        }

        if (infomation.type === InfomationType.address) {
            return <FormAddress />;
        }

        if (infomation.type === InfomationType.taxcode) {
            return <FormTaxCode />;
        }
        if (infomation.type === InfomationType.ecommerce) {
            return <FormEcommerce />;
        }
    };

    return (
        <>
            <AppBar
                color="transparent"
                position="static"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton edge="start" component={Link} to="/add-contact">
                        <ArrowBackIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.leftContent}>
                        {infomation.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <div>
                            <Typography
                                style={{ fontSize: 19, marginBottom: 5 }}
                            >
                                {infomation.heading}
                            </Typography>
                            <Typography
                                style={{ fontSize: 15, color: '#787878' }}
                            >
                                {infomation.text}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item>{renderForm()}</Grid>
                </Grid>
            </Container>
        </>
    );
}

export default AddContactItem;
