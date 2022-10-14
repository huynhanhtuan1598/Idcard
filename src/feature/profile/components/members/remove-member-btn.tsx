import { useMutation } from '@apollo/client';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import get from 'lodash/get';
import { useSnackbar } from 'notistack';
import React from 'react';
// import { MUTATION_REMOVE_MEMBER_GROUP } from '../../../../query';
// import { useGroupDetail } from '../../state';
import { useOwnerGroup } from './members';
import { MUTATION_REMOVE_MEMBER_GROUP } from '../../../../components/query/group';
import { useGroupDetail } from '../../state/group-detail/context';

interface Props {
    memberId: string;
    callback?: () => void;
}

const RemoveMemberBtn = ({ memberId, callback }: Props) => {
    const { group, refetch } = useGroupDetail();
    const { enqueueSnackbar } = useSnackbar();
    const [removeMemberGroup, { loading }] = useMutation(
        MUTATION_REMOVE_MEMBER_GROUP,
        {
            onError(error) {
                console.log('error', error);
                enqueueSnackbar('Lỗi xóa thành viên', { variant: 'error' });
            },
            onCompleted() {
                enqueueSnackbar('Đã xóa thành viên', { variant: 'success' });
                refetch();
            },
        }
    );

    const isOwnerGroup = useOwnerGroup();

    if (!isOwnerGroup) {
        return <></>;
    }

    const handleClick = () => {
        removeMemberGroup({
            variables: {
                groupId: get(group, '_id') as string,
                memberId,
            },
        });
    };

    return (
        <IconButton onClick={handleClick} disabled={loading}>
            <DeleteIcon />
        </IconButton>
    );
};

export { RemoveMemberBtn };
