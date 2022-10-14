import { Chip } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInviteMemberGroupMutation } from '../../../../components/generated/graphql';

interface Props {
    type: 'owner' | 'invite';
    memberId: string;
    groupId: string;
}

const InviteMemberBtn = ({ type, memberId, groupId }: Props) => {
    const { t } = useTranslation('group');
    const { enqueueSnackbar } = useSnackbar();
    const [invited, setInvited] = useState<boolean>(false);

    const [iniviteMemberGroup, { loading }] = useInviteMemberGroupMutation({
        onError() {
            enqueueSnackbar(t('invite.error'), { variant: 'error' });
        },
        onCompleted() {
            enqueueSnackbar(t('invite.success'), { variant: 'success' });
            setInvited(true);
        },
    });

    function handleClick() {
        if (type === 'owner') {
            return;
        }

        iniviteMemberGroup({
            variables: {
                groupId,
                userId: memberId,
            },
        });
    }

    const label =
        type === 'owner'
            ? t('owner_group')
            : invited
            ? t('invited')
            : t('invite');
    const color =
        type === 'owner' ? 'primary' : invited ? undefined : 'secondary';

    const disabled = invited || loading;

    return (
        <Chip
            label={label}
            size="small"
            color={color}
            onClick={handleClick}
            disabled={disabled}
        />
    );
};

export { InviteMemberBtn };
