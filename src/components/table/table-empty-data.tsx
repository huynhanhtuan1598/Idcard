import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
    title?: string;
}

const useStyle = makeStyles({
    wrap: {
        padding: '20px 0',
    },
    textCenter: {
        textAlign: 'center',
    },
});

const TableEmptyData = ({ title = 'Không có dữ liệu' }: Props) => {
    const classes = useStyle();
    return (
        <div className={classes.wrap}>
            <Typography className={classes.textCenter}>{title}</Typography>
        </div>
    );
};

export { TableEmptyData };
