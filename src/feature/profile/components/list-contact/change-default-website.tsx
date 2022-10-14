import { Checkbox, FormControlLabel } from '@mui/material';
import { get } from 'lodash';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { namedOperations, useToggleDefaultWebsiteMutation } from '../../../../components/generated/graphql';
// import {
//     namedOperations,
//     useToggleDefaultWebsiteMutation,
// } from '../../../../generated/graphql';

interface Props {
    website: any;
    handleClose: () => void;
}

const ChangeDefaultWebsite = ({ website, handleClose }: Props) => {
    const { t } = useTranslation('add_contact');
    const { enqueueSnackbar } = useSnackbar();
    const [toggleDefaultWebsite, { loading }] = useToggleDefaultWebsiteMutation(
        {
            onError() {
                enqueueSnackbar(t('save.error'), {
                    variant: 'error',
                });
            },
            refetchQueries: [namedOperations.Query.Me],
        }
    );

    const checked = !!get(website, 'isDefault');

    const handleChange = () => {
        toggleDefaultWebsite({
            variables: {
                id: website._id,
                isDefault: !website.isDefault,
            },
        }).then(() => {
            const message = checked
                ? 'Đã hủy chọn trang web thành mặc định'
                : 'Đã đặt trang web thành mặc định';
            enqueueSnackbar(message, {
                variant: 'success',
            });
            handleClose();
        });
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    disabled={loading}
                />
            }
            label={t('website.default') as string}
        />
    );
};

export { ChangeDefaultWebsite };
