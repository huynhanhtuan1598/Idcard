import {
    Avatar,
    CircularProgress,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import get from 'lodash/get';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAllInviteGroupQuery } from '../../../../components/generated/graphql';
import { EmptyData } from '../empty-data/empty-data';
import { MenuActionInvite } from './menu-action-invite';

const useStyle = makeStyles({
    inline: {
        display: 'inline',
    },
});

function InviteGroup() {
    const { t } = useTranslation('group');
    const classes = useStyle();

    const { loading, error, data, refetch } = useAllInviteGroupQuery();

    if (loading) {
        return (
            <Grid spacing={2} justifyContent="center" container>
                <Grid item>
                    <CircularProgress size={30} />
                </Grid>
            </Grid>
        );
    }

    const renderContent = () => {
        if (error) {
            return <EmptyData>{t('error_invite')}</EmptyData>;
        }

        const invites = data?.allInviteGroup.data;

        if (!invites || invites.length === 0) {
            return <EmptyData>{t('empty_invite')}</EmptyData>;
        }

        return (
            <List>
                {invites.map((item) => {
                    return (
                        <ListItem key={item._id}>
                            <ListItemAvatar>
                                <Avatar
                                    src={get(item, 'groupId.avatar.url')}
                                ></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.groupId.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {item.inviteUserId.fullname}
                                        </Typography>{' '}
                                        {t('text_invite')}
                                    </React.Fragment>
                                }
                            />
                            <ListItemSecondaryAction>
                                <MenuActionInvite
                                    groupId={item.groupId._id}
                                    inviteGroupId={item._id}
                                    callback={refetch}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        );
    };
    return <Paper>{renderContent()}</Paper>;
}

export { InviteGroup };
