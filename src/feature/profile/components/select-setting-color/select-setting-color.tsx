import { Button, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMemo, useState } from 'react';
// import { TSettingColorType } from '../edit-color-theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { TSettingColorType } from '../edit-color-theme/edit-color-theme';

interface Props {
    onChange?: (value: TSettingColorType) => void;
    defaultValue?: TSettingColorType;
}

const useStyles = makeStyles({
    button: {
        textTransform: 'inherit',
        fontWeight: 700,
        color: '#333',
    },
});

const SelectSettingColor = ({ onChange, defaultValue }: Props) => {
    const { t } = useTranslation('theme');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menus: Array<{ id: TSettingColorType; label: string }> = useMemo(
        () => [
            { id: 'headingColor', label: t('appearance.headingColor') },
            { id: 'headingSubColor', label: t('appearance.headingSubColor') },
            {
                id: 'color',
                label: t('appearance.color'),
            },
            { id: 'iconColor', label: t('appearance.colorIcon') }
        ],
        [t]
    );

    const classes = useStyles();

    const menuSelect = useMemo(
        () => menus.find((m) => m.id === defaultValue),
        [defaultValue, menus]
    );

    return (
        <div>
            <Button
                className={classes.button}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {menuSelect?.label}
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menus.map((item) => {
                    const handleSelect = () => {
                        onChange && onChange(item.id);
                        handleClose();
                    };

                    return (
                        <MenuItem onClick={handleSelect} key={item.id}>
                            {item.label}
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export { SelectSettingColor };
