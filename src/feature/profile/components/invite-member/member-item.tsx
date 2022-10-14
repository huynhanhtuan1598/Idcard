import {
    Avatar,
    Chip,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material';
import { get } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserInfoFragment } from '../../../../components/generated/graphql';
import { useGroupDetail } from '../../state/group-detail/context';
// import { UserInfoFragment } from '../../../../generated/graphql';
// import { useGroupDetail } from '../../state';
import { InviteMemberBtn } from './invite-member-btn';

interface Props {
    member: UserInfoFragment;
    lastChild?: boolean;
    isInvited?: boolean;
}

function MemberItem({ member, lastChild = false, isInvited = false }: Props) {
    const { t } = useTranslation('group');
    const { group } = useGroupDetail();
    const ownerId = get(group, 'ownerId._id');

    function renderAction() {
        if (ownerId === member._id) {
            return (
                <InviteMemberBtn
                    type="owner"
                    memberId={member._id}
                    groupId={group?._id as string}
                />
            );
        }

        if (isInvited) {
            return <Chip label={t('invited')} size="small" />;
        }

        const index = (group?.members || []).findIndex(
            (item) => item._id === member._id
        );
        if (index === -1) {
            return (
                <InviteMemberBtn
                    type="invite"
                    memberId={member._id}
                    groupId={group?._id as string}
                />
            );
        }
        return null;
    }

    function gotoProfile() {
        const linkProfile =
            get(member, 'hash_url') || get(member, 'idRegister');
        const url = `${window.location.origin}/user/${linkProfile}`;
        window.open(url, '_blank');
    }

    return (
        <ListItem key={member._id} divider={!lastChild} button>
            <ListItemAvatar>
                <Avatar
                    onClick={gotoProfile}
                    src={get(member, 'avatarS3.url')}
                    alt={member.fullname}
                />
            </ListItemAvatar>
            <ListItemText onClick={gotoProfile} primary={member.fullname} />
            <ListItemSecondaryAction>{renderAction()}</ListItemSecondaryAction>
        </ListItem>
    );
}

export { MemberItem };
