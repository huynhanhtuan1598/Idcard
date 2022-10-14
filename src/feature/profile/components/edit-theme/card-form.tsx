import { Card, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';

interface Props {
  label: string;
  children: ReactNode;
}

const useStyle = makeStyles((theme: Theme) => ({
  card: {
    padding: '10px 0',
  },
  label: {
    marginBottom: 10,
  },
}));

function CardForm({ label, children }: Props) {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography className={classes.label}>{label}</Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Card>
  );
}

export { CardForm };
