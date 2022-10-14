import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@mui/material';
import get from 'lodash/get';
import React from 'react';
import { MemberInfoFragment } from '../../../../components/generated/graphql';
// import { MemberInfoFragment } from '../../../../generated/graphql';
import { RemoveMemberBtn } from './remove-member-btn';

interface Props {
    member: MemberInfoFragment
}

const MemberItem = ({ member }: Props) => {
    function gotoProfile() {
        const linkProfile = member.hash_url || member.idRegister;

        const url = `${window.location.origin}/user/${linkProfile}`;
        window.open(url, '_blank');
    }

    return (
        <ListItem alignItems="flex-start" key={member._id}>
            <ListItemAvatar>
                <Avatar
                    onClick={gotoProfile}
                    alt={member.fullname}
                    src={get(member, 'avatarS3.url')}
                />
            </ListItemAvatar>

            <ListItemText
                onClick={gotoProfile}
                primary={member.fullname}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        {member.career_position}
                    </Typography>
                }
            />

            <ListItemSecondaryAction>
                <RemoveMemberBtn memberId={member._id} />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export { MemberItem };
