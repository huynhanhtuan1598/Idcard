import { Button, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
// import { ItemList } from '../../../../collection';
import { useAuth } from '../../../../components/context/auth';
import { useRemoveContactItemMutation } from '../../../../components/generated/graphql';
// import { useAuth } from '../../../../components/context';
// import { useRemoveContactItemMutation } from '../../../../generated/graphql';

interface Props {
    item: [];
    toggle: () => void;
}

const RemoveBtn = ({ item, toggle }: Props) => {
    const { t } = useTranslation();
    const { updateInfo } = useAuth();
    const [removeInfo, { loading }] = useRemoveContactItemMutation({
        onCompleted(data) {
            if (data.removeContactItem?.success) {
                updateInfo(data.removeContactItem.user);
                toggle();
            }
        },
    });

    const onClick = () => {
        removeInfo({
           
        });
    };
    return (
        <Button
            color="secondary"
            variant="outlined"
            size="large"
            onClick={onClick}
            //   startIcon={!loading && <HighlightOffIcon />}
            fullWidth
        >
            {loading ? <CircularProgress size={20} /> : t('delete')}
        </Button>
    );
};

export { RemoveBtn };
