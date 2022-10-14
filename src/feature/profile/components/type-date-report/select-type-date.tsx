import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Menu, MenuItem, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { ETypeDate } from '../../../../../src/components/context/report';
import { useReport } from '../../../../../src/components/context/report';

const useStyle = makeStyles((theme: Theme) => ({
    button: {
        paddingLeft: 0,
        paddingRight: 0,
        border: `1px solid ${theme.palette.grey[300]}`,
        minWidth: 40,
    },
}));

interface IMenu {
    id: ETypeDate;
    label: string;
}

const dataMenu: IMenu[] = [
    {
        id: ETypeDate.Week,
        label: 'Tuần này',
    },
    {
        id: ETypeDate.Month,
        label: 'Tháng này',
    },
    {
        id: ETypeDate.Year,
        label: 'Năm nay',
    },
];

function SelectTypeDate() {
    const { setTypeDate, typeDate } = useReport();
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.button}
            >
                <FilterListIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {dataMenu.map((menu) => {
                    const onClick = () => {
                        setTypeDate(menu.id);
                        handleClose();
                    };
                    return (
                        <MenuItem
                            onClick={onClick}
                            key={menu.id}
                            disabled={menu.id === typeDate}
                        >
                            {menu.label}
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}

export { SelectTypeDate };
