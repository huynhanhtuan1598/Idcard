import ClearIcon from '@mui/icons-material/Clear';
import PaletteIcon from '@mui/icons-material/Palette';
import { IconButton, Popover, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import isNil from 'lodash/isNil';
import React, { forwardRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const SIZE_BOX = 70;

const useStyle = makeStyles((theme: Theme) => ({
    box: {
        width: SIZE_BOX,
        height: SIZE_BOX,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        cursor: 'pointer',
        border: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0,
        cursor: 'pointer',
    },
    deleteBtn: {
        position: 'absolute',
        zIndex: 10,
        top: -7,
        right: -7,
        borderRadius: '100%',
        color: '#fff',
        background: theme.palette.error.main,
    },
    popover: {
        padding: 15,
    },
}));

interface Props {
    color?: string;
    selectColor?: (color?: string) => void;
    size?: number;
}

const InputColor = forwardRef<HTMLInputElement, Props>(
    ({ color, selectColor, size, ...props }, ref: any) => {
        const [anchorEl, setAnchorEl] = useState(null);
        const classes = useStyle();

        const handleClick = (event: any) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleChangeColor = (value: string) => {
            selectColor && selectColor(value);
        };

        const removeColor = () => {
            selectColor && selectColor(undefined);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'color-popover' : undefined;

        const isNullColor = isNil(color) || color.length === 0;

        return (
            <div>
                <div style={{ position: 'relative' }}>
                    <div
                        className={classes.box}
                        style={{ backgroundColor: color }}
                        onClick={handleClick}
                    >
                        {isNullColor && <PaletteIcon color="primary" />}
                        <input
                            className={classes.input}
                            {...props}
                            ref={ref}
                            value={color}
                        />
                    </div>

                    {!isNullColor && (
                        <IconButton
                            onClick={removeColor}
                            size="small"
                            className={classes.deleteBtn}
                        >
                            <ClearIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    )}
                </div>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <div className={classes.popover}>
                        <HexColorPicker
                            color={isNullColor ? undefined : color}
                            onChange={handleChangeColor}
                        />
                    </div>
                </Popover>
            </div>
        );
    }
);

export { InputColor };
