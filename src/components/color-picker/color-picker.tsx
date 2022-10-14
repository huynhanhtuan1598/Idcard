import { Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useCallback, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTranslation } from 'react-i18next';
import { Button } from '../button/button';

interface Props {
    defaultValue?: string;
    size?: number;
    onChange: (color: string) => void;
}

const ColorPicker = ({ defaultValue, size = 40, onChange }: Props) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen((o) => !o);

    const handleChangeColor = useCallback(
        (val: string) => {
            onChange(val);
        },
        [onChange]
    );

    return (
        <>
            <Box
                onClick={toggle}
                sx={{
                    border: '3px solid #fff',
                    boxShadow: '0 0 10px rgba(0,0,0,.1)',
                    height: size,
                    width: size,
                    backgroundColor: defaultValue,
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
            ></Box>

            <Dialog open={open} onClose={toggle}>
                <DialogTitle>{t('selectColor')}</DialogTitle>
                <DialogContent sx={{ p: 2 }}>
                    <HexColorPicker onChange={handleChangeColor} />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={toggle}>{t('select')}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
export { ColorPicker };
