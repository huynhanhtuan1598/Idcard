import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../react-router-dom';
import { DropdownUserAction } from '../components/dropdown-user-action/dropdown-user-action';
import { Groups } from '../components/groups/groups';
import { GroupTab } from '../components/group-tab/group-tab';
import { InviteGroup } from '../components/invite-group/invite-group';
import { TTabId } from '../components/group-tab/group-tab';





const useStyle = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    leftContent: {
        flexGrow: 1,
        fontSize: 16,
    },
});

function Group() {
    const { t } = useTranslation('group');
    const [value, setValue] = useState<TTabId>('group');
    const classes = useStyle();

    const changeTab = (tabId: TTabId) => {
        setValue(tabId);
    };

    return (
        <>
            <AppBar
                color="transparent"
                position="static"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton edge="start" component={Link} to="/profile">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.leftContent}>
                        {t('title')}
                    </Typography>

                    <DropdownUserAction />
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <GroupTab changeTab={changeTab} tabIdSelect={value} />
                <div>{value === 'invite' ? <InviteGroup /> : <Groups />}</div>
            </Container>
        </>
    );
}

export default Group;
