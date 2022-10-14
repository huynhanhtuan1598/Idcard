import { Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GroupTabItem } from './tab';

export type TTabId = 'group' | 'invite';

export interface ITab {
    label: string;
    id: TTabId;
}

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}));

interface Props {
    changeTab: (id: TTabId) => void;
    tabIdSelect?: TTabId;
}

function GroupTab({ changeTab, tabIdSelect }: Props) {
    const { t } = useTranslation('group');
    const classes = useStyle();

    const tabs: ITab[] = [
        { label: t('tab.group'), id: 'group' },
        { label: t('tab.invite'), id: 'invite' },
    ];

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            className={classes.root}
        >
            {tabs.map((tab) => (
                <Grid key={tab.id} item>
                    <GroupTabItem
                        tab={tab}
                        active={tab.id === tabIdSelect}
                        onClick={changeTab}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export { GroupTab };
