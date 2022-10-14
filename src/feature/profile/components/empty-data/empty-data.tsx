import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { ReactNode } from 'react';

const useStyle = makeStyles((theme: Theme) => ({
  empty: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
  },
}));

interface Props {
  children: ReactNode;
}

const EmptyData = ({ children }: Props) => {
  const classes = useStyle();

  return <Typography className={classes.empty}>{children}</Typography>;
};

export { EmptyData };
