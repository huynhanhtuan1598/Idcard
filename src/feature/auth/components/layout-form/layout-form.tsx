import { Grid, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import React, { ReactNode } from 'react';

interface Props {
    title: string;
    description?: string;
    content: ReactNode;
}

const useStyle = makeStyles({
    wrap: {
        padding: '50px 0',
    },
    heading: {
        textAlign: 'center',
    },
    title: {
        fontSize: 33,
        fontWeight: 500,
    },
    description: {
        color: '#B4B4B4',
    },
});

const Heading = styled(Typography)({
    fontSize: 33,
    fontWeight: 500,
});

const LayoutForm = ({ title, content, description }: Props) => {
    const classes = useStyle();
    return (
        <Grid container spacing={2} direction="column" className={classes.wrap}>
            <Grid item className={classes.heading}>
                <Heading variant="h3">{title}</Heading>
                {description && (
                    <Typography
                        variant="subtitle1"
                        className={classes.description}
                    >
                        {description}
                    </Typography>
                )}
            </Grid>
            <Grid item>{content}</Grid>
        </Grid>
    );
};

export { LayoutForm };
