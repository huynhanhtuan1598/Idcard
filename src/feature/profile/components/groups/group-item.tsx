import { Add } from '@mui/icons-material';
import {
    Avatar,
    AvatarGroup,
    Button,
    Grid,
    Paper,
    Theme,
    Tooltip,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
// import { User } from '../../../../collection';
import { useAuth } from '../../../../components/context/auth';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    heading: {
        textAlign: 'center',
    },
    headingCard: {},
    title: {
        fontSize: 16,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    avatars: {
        marginBottom: theme.spacing(1),
    },
    button: {
        textTransform: 'initial',
    },
}));

interface Props {
    group: any;
}

const GroupItem = ({ group }: Props) => {
    const { user } = useAuth();
    const classes = useStyles();

    const isOwner = user?._id === get(group, 'ownerId._id');

    return (
        <Paper className={classes.root}>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="column"
                rowSpacing={2}
            >
                <Grid item xs={12} className={classes.heading}>
                    <Tooltip
                        title={group.title}
                        aria-label="title"
                        arrow
                        placement="top"
                    >
                        <Typography variant="h6" className={classes.title}>
                            {group.title}
                        </Typography>
                    </Tooltip>

                    <Typography
                        variant="body2"
                        color={isOwner ? 'primary' : 'secondary'}
                        component="span"
                    >
                        {isOwner ? 'chủ nhóm' : 'thành viên'}
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography color="textSecondary" variant="body2">
                                Thành viên
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* <AvatarGroup max={4} className={classes.avatars}>
                                {group.members.length === 0 ? (
                                    <Avatar>
                                        <Add />
                                    </Avatar>
                                ) : (
                                    group.members.map((member: User) => {
                                        return (
                                            <Avatar
                                                key={member._id}
                                                alt={member.fullname}
                                                src={get(
                                                    member,
                                                    'avatarS3.url'
                                                )}
                                            />
                                        );
                                    })
                                )}
                            </AvatarGroup> */}
                        </Grid>
                    </Grid>
                </Grid>

                <Button
                    size="small"
                    component={Link}
                    variant="contained"
                    color="primary"
                    to={`/group/${group._id}`}
                    className={classes.button}
                >
                    Chi tiết
                </Button>
            </Grid>
        </Paper>
    );
};

export { GroupItem };
