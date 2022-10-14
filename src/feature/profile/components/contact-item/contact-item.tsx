import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Grid, SvgIcon } from '@mui/material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useReportHandle } from '../../../../components/context/report-handle';
import { hexToRGBA } from '../../../../components/utils/hexToRgba';
import { iconsSocial } from '../../assets/icon';
import { getListContact } from '../../utils/getListContact';
import { LinkAction } from '../link-action/link-action';
// import { useReportHandle } from '../../../../components/context';
// import { hexToRGBA } from '../../../../components/utils';
// import { iconsSocial } from '../../assets/icon';
// import { getListContact } from '../../utils';
// import { LinkAction } from '../link-action';


const useStyle = makeStyles({
    icon: {
        color: '#165FE6',
    },

    profileBox: {
        padding: '10px',
        cursor: 'pointer',
        overflow: 'hidden',
        borderBottom: '1px solid #eee',
    },

    label: {
        fontWeight: 300,
        color: '#000',
        opacity: 0.7,
        fontSize: '0.75rem',
    },

    placeholder: {
        fontWeight: 400,
        color: '#B4B4B4',
    },

    content: {
        fontWeight: 500,
        overflow: 'hidden',
        // whiteSpace: 'nowrap',
        // textOverflow: 'ellipsis',
        color: '#000',
        fontSize: '1rem',
        whiteSpace: 'pre-line',
    },
});

interface Props {
    contact: any;
    onClick?: () => void;
    colorIcon?: string;
    color?: string;
}

const ContactItem = ({ contact, onClick, colorIcon, color }: Props) => {
    const { i18n } = useTranslation();
    const { clickReport } = useReportHandle();
    const classes = useStyle();

    const contactItem: any = get(getListContact(contact.type), contact.name);

    const handleClickReport = () => {
        clickReport({
            itemId: contact._id,
            name: contact.name,
        });
    };

    if (!contactItem) {
        return null;
    }

    const styleColor = {
        color: colorIcon,
    };

    const renderLogo = () => {
        if (contact.type === 'bank') {
            return <AccountBalanceIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'email') {
            return <MailOutlineIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'phone') {
            return <PhoneIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'website') {
            return <PublicIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'address') {
            return <MapIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'taxcode') {
            return <ReceiptOutlinedIcon style={{ ...styleColor }} />;
        }

        if (contact.type === 'services') {
            return (
                <SvgIcon style={{ ...styleColor }}>
                    {iconsSocial.service}
                </SvgIcon>
            );
        }

        return <span style={{ ...styleColor }}>{contactItem.logo}</span>;
    };

    const style = {
        borderColor: color ? hexToRGBA(color, 0.2) : grey[200],
    };

    const label =
        contact.type === 'bank'
            ? contactItem.shortname
            : typeof contactItem.name === 'string'
            ? contactItem.name
            : contactItem.name[i18n.language];

    return (
        <LinkAction
            href={contact.content}
            type={contact.type}
            nameType={contact.name}
            clickReport={handleClickReport}
        >
            <div className={classes.profileBox} style={style}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1} className={classes.icon}>
                        {renderLogo()}
                    </Grid>
                    <Grid item xs={11}>
                        <div style={{ paddingLeft: 10 }}>
                            <div className={classes.label} style={{ color }}>
                                {label}
                            </div>

                            <div className={classes.content} style={{ color }}>
                                {contact.owner
                                    ? `${contact.owner} - ${contact.content}`
                                    : contact.shortName
                                    ? contact.shortName
                                    : contact.content}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </LinkAction>
    );
};

export { ContactItem };
