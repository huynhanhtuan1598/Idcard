import { PersonAddOutlined } from '@mui/icons-material';
import { Fab, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { URL_API } from '../constants/url';
// import { URL_API } from '../../constants';
import { useReportHandle } from '../context/report-handle';
// import { useReportHandle } from '../../context';
import { defaultTheme } from './template-render';

const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        color: '#fff',
        bottom: 30,
        right: 15,

        '&:hover': {
            textDecoration: 'none',
        },
    },
    button: {
        textTransform: 'initial',
        boxShadow: 'none',
    },
});

interface Props {
    userId: string;
    color?: string;
    isFixed?: boolean;
}

function DownloadFile(props: Props) {
    const { userId, color = defaultTheme.color, isFixed = true } = props;
    const classes = useStyles(props);
    const [isZoom, setIsZoom] = useState<boolean>(false);
    const { createReportUser } = useReportHandle();

    const handleDownload = async () => {
        createReportUser({
            variables: {
                createReportUserInput: {
                    userId: userId,
                    type: 'save',
                },
            },
        });
        setTimeout(() => {
            document.location.href = `${URL_API}save-contact/${userId}`;
        }, 300);
    };

    useEffect(() => {
        setIsZoom(true);
    }, []);

    return (
        <Zoom
            in={isZoom}
            style={{
                transitionDelay: isZoom ? '500ms' : '0ms',
            }}
        >
            <Fab
                className={classes.root}
                onClick={handleDownload}
                color="primary"
                aria-label="add"
                size="large"
                style={{
                    // background: color,
                    position: isFixed ? 'fixed' : 'absolute',
                }}
            >
                <PersonAddOutlined />
            </Fab>
        </Zoom>
    );
}

export { DownloadFile };
