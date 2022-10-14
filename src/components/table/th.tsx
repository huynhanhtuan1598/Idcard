import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Grid, TableCell, TableCellProps, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import type { TAlign, Order } from './table';
import cls from 'classnames';
import { ITableChangeOrder, useTable } from './context';

type Props = TableCellProps & {
    onOrder?: (value: ITableChangeOrder) => void;
    align?: TAlign;
    label?: string;
    isOrder?: boolean;
    order?: Order;
    orderBy?: string;
};

const useStyles = makeStyles({
    wrap: {
        cursor: ({ isOrder }: Props) => (isOrder ? 'pointer' : 'default'),
    },
    heading: {
        fontWeight: 600,
        fontSize: 14,
    },
    arrow: {
        display: 'flex',
        flexDirection: 'column',
    },
    icon: {
        margin: 0,
        color: '#ddd',
    },
    up: {
        transform: 'translateY(8px)',
    },
    down: {
        transform: 'translateY(-8px)',
    },
    active: {
        color: blue[300],
    },
});

const Th = ({ align, label, isOrder, onOrder, order, orderBy }: Props) => {
    const { orderBy: orderByGlobal } = useTable();
    const classes = useStyles({ isOrder });

    const getValueOrder = (): Order | undefined => {
        if (!order) {
            return 'desc';
        }

        if (order === 'desc') {
            return 'asc';
        }

        if (order === 'asc') {
            return;
        }

        return 'desc';
    };

    const handleClick = () => {
        if (onOrder && isOrder) {
            const valueOrder = getValueOrder();
            onOrder({ order: valueOrder, orderBy: orderBy as string });
        }
    };

    const isActiveOrder = orderBy === orderByGlobal;

    return (
        <TableCell
            align={align || 'left'}
            // padding={
            //     headCell.disablePadding
            //         ? 'none'
            //         : 'normal'
            // }
            //
            onClick={handleClick}
        >
            {isOrder ? (
                <Grid
                    className={classes.wrap}
                    container
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item>
                        <Typography className={classes.heading}>
                            {label}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {isOrder && (
                            <span
                                className={`${classes.icon} ${classes.arrow}`}
                            >
                                <ArrowDropUpIcon
                                    className={cls(classes.up, {
                                        [classes.active]:
                                            isActiveOrder && order === 'desc',
                                    })}
                                />
                                <ArrowDropDownIcon
                                    className={cls(classes.down, {
                                        [classes.active]:
                                            isActiveOrder && order === 'asc',
                                    })}
                                />
                            </span>
                        )}
                    </Grid>
                </Grid>
            ) : (
                <Typography className={classes.heading}>{label}</Typography>
            )}
        </TableCell>
    );
};

export { Th };
