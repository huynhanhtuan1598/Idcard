import { Grid, List, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import get from 'lodash/get';
import React from 'react';
import { useAuth } from '../../../../components/context/auth';
import { MemberInfoFragment } from '../../../../components/generated/graphql';
import { useGroupDetail } from '../../state/group-detail/context';
// import { useGroupDetail } from '../../state';
import { InviteMember } from '../invite-member/invite-member';
import { MemberItem } from './member-item';

const useStyle = makeStyles((theme: Theme) => ({
    title: { marginBottom: theme.spacing(1) },
    emptyRoot: {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

interface Props {
    members: MemberInfoFragment[];
}

export const useOwnerGroup = () => {
    const { user } = useAuth();
    const { group } = useGroupDetail();

    const ownerId = get(group, 'ownerId._id');

    return user && user._id === ownerId;
};

const Members = ({ members = [] }: Props) => {
    const memberIds = members.map((member) => member._id);
    const classes = useStyle();

    function renderContent() {
        if (members.length === 0) {
            return (
                <Paper>
                    <Typography className={classes.emptyRoot}>
                        Chưa có thành viên
                    </Typography>
                </Paper>
            );
        }

        return (
            <List component={Paper}>
                {members.map((member) => {
                    return <MemberItem key={member._id} member={member} />;
                })}
            </List>
        );
    }

    return (
        <div>
            <Grid
                className={classes.title}
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h6">
                        Thành viên
                    </Typography>
                </Grid>
                <Grid item>
                    <InviteMember memberIds={memberIds} />
                </Grid>
            </Grid>
            {renderContent()}
        </div>
    );
};

export { Members };
