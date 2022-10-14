import { useQuery } from '@apollo/client';
import {
    CircularProgress,
    List,
    Paper,
    TextField,
    Theme,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { debounce, get } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAllCustomerQuery, UserInfoFragment, } from '../../../../components/generated/graphql';
import { QUERY_GET_INVITE_OF_GROUP } from '../../../../components/query/invite-group';
import { useGroupDetail } from '../../state/group-detail/context';
import { MemberItem } from './member-item';

interface Props {
    memberIds: string[];
}

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    members: {
        marginTop: theme.spacing(2),
    },
    lists: {
        margin: 0,
    },
    emptyText: {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    loading: {
        display: 'flex',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const useSearchMember = (textSearch?: string) => {
    const [members, setMembers] = useState<UserInfoFragment[]>([]);

    const { loading } = useAllCustomerQuery({
        variables: {
            allCustomerInput: {
                textSearch,
                page: 1,
                perPage: 20,
            },
        },
        onError(error) {},
        onCompleted(data) {
            setMembers(data.allCustomer.data);
        },
    });

    return {
        loading,
        members,
    };
};

function useInviteOfGroup() {
    const { group } = useGroupDetail();
    const [invites, setInvites] = useState<any[]>([]);

    const { loading } = useQuery(QUERY_GET_INVITE_OF_GROUP, {
        variables: {
            groupId: get(group, '_id') as string,
        },
        onError(error) {},
        onCompleted(data) {
            setInvites(data.getInviteOfGroup);
        },
    });

    return {
        loading,
        invites,
    };
}

function checkIsInvited(userId: string, invites: any[]): boolean {
    const index = invites.findIndex(
        (item) => get(item, 'userId._id') === userId
    );
    if (index !== -1) {
        return true;
    }
    return false;
}

const InviteMemberForm = ({ memberIds }: Props) => {
    const { t } = useTranslation('group');
    const classes = useStyle();
    const [textSearch, setTextSearch] = useState<string>();
    const { loading, members } = useSearchMember(textSearch);
    const { invites } = useInviteOfGroup();

    const onChangeText = debounce((text: string) => {
        setTextSearch(text);
    }, 300);

    function renderContent() {
        if (loading) {
            return (
                <div className={classes.loading}>
                    <CircularProgress />
                </div>
            );
        }

        if (members.length === 0) {
            return (
                <Typography className={classes.emptyText}>
                    {t('not_found')}
                </Typography>
            );
        }

        return (
            <List>
                {members.map((member, index) => (
                    <MemberItem
                        member={member}
                        lastChild={index === members.length - 1}
                        isInvited={checkIsInvited(member._id, invites)}
                    />
                ))}
            </List>
        );
    }

    return (
        <div className={classes.root}>
            <TextField
                label={t('search')}
                variant="outlined"
                onChange={(e) => onChangeText(e.target.value)}
                fullWidth
                autoFocus
            />
            <Paper className={classes.members}>{renderContent()} </Paper>
        </div>
    );
};

export { InviteMemberForm };
