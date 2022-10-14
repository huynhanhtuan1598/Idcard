import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/button/button';
import { useMessage } from '../../../../components/message/notification';
import { ColorPicker } from '../../../../components/color-picker/color-picker';
import { useAuth } from '../../../../components/context/auth';
import { useSettingAvatarMutation } from '../../../../components/generated/graphql';
import { useEditAvatar } from '../../state/edit-avatar/context';

interface RowEditProps {
    label: string;
    content: any;
}

const RowEdit = memo(({ label, content }: RowEditProps) => {
    return (
        <Card
            sx={{
                py: 1,
                px: 2,
            }}
        >
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography>{label}</Typography>
                </Grid>
                <Grid item>{content}</Grid>
            </Grid>
        </Card>
    );
});

interface BorderWidthProps {
    onChange: (val: number) => void;
    value?: number;
    max?: number;
    min?: number;
    step?: number;
}

const InputNumber = memo(
    ({ onChange, value = 0, step = 1, max, min = 0 }: BorderWidthProps) => {
        return (
            <Grid container alignItems="center">
                <Grid item>
                    <IconButton
                        onClick={() => onChange(value - step)}
                        disabled={value === min}
                    >
                        <RemoveIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            background: '#eee',
                            border: '3px solid #fff',
                            boxShadow: '0 0 10px rgba(0,0,0,.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                        }}
                    >
                        <Typography style={{ fontWeight: 400 }}>
                            {value}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <IconButton
                        onClick={() => onChange(value + step)}
                        disabled={value === max}
                    >
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
);

const ButtonSave = () => {
    const { updateAvatarConfig, user } = useAuth();
    const { t } = useTranslation(['common', 'editAvatar']);
    const message = useMessage();
    const {
        borderRadius,
        borderColor,
        borderWidth,
        backgroundColor,
        boxShadow,
    } = useEditAvatar();
    const [settingAvatar, { loading }] = useSettingAvatarMutation({
        onCompleted(data) {
            if (data.settingAvatar) {
                updateAvatarConfig({
                    ...user,
                    avatarConfig: data.settingAvatar.avatarConfig,
                });
                message(
                    t('tab.setting.message.success', { ns: 'editAvatar' }),
                    { variant: 'success' }
                );
            } else {
                message(t('tab.setting.message.error', { ns: 'editAvatar' }), {
                    variant: 'error',
                });
            }
        },
        onError(err) {
            console.log(err);
            message('error', { variant: 'error' });
        },
    });
    const handleSave = () => {
        settingAvatar({
            variables: {
                settingAvatarInput: {
                    borderRadius,
                    borderColor,
                    borderWidth,
                    backgroundColor,
                    boxShadow,
                },
            },
        });
    };

    return (
        <Button
            variant="contained"
            loading={loading}
            onClick={handleSave}
            color="primary"
            fullWidth
        >
            {t('save')}
        </Button>
    );
};

const SettingAvatar = () => {
    const { t } = useTranslation('editAvatar');
    const {
        changeSettingAvatar,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        boxShadow,
    } = useEditAvatar();
    const handleChangeBgColor = (color: string) => {
        changeSettingAvatar({
            value: color,
            field: 'backgroundColor',
        });
    };
    const handleChangeBorderColor = (color: string) => {
        changeSettingAvatar({
            value: color,
            field: 'borderColor',
        });
    };

    const handleChangeBorderWidth = (value: number) => {
        changeSettingAvatar({
            value: value,
            field: 'borderWidth',
        });
    };
    const handleChangeBorderRadius = (value: number) => {
        changeSettingAvatar({
            value: value,
            field: 'borderRadius',
        });
    };
    const handleChangeBoxShadow = (value: number) => {
        changeSettingAvatar({
            value: value,
            field: 'boxShadow',
        });
    };

    return (
        <Grid container rowSpacing={2} justifyContent="center">
            <Grid item xs={12}>
                <RowEdit
                    label={t('tab.setting.background_color')}
                    content={
                        <ColorPicker
                            defaultValue={backgroundColor}
                            onChange={handleChangeBgColor}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <RowEdit
                    label={t('tab.setting.border_color')}
                    content={
                        <ColorPicker
                            defaultValue={borderColor}
                            onChange={handleChangeBorderColor}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <RowEdit
                    label={t('tab.setting.border_width')}
                    content={
                        <InputNumber
                            max={5}
                            value={borderWidth}
                            onChange={handleChangeBorderWidth}
                        />
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <RowEdit
                    label={t('tab.setting.border_radius')}
                    content={
                        <InputNumber
                            value={borderRadius}
                            onChange={handleChangeBorderRadius}
                            max={50}
                            step={5}
                        />
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <RowEdit
                    label={t('tab.setting.box_shadow')}
                    content={
                        <InputNumber
                            max={50}
                            step={5}
                            value={boxShadow}
                            onChange={handleChangeBoxShadow}
                        />
                    }
                />
            </Grid>

            <Grid item>
                <ButtonSave />
            </Grid>
        </Grid>
    );
};

export { SettingAvatar };
