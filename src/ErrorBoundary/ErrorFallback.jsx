import React from 'react';

import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  Typography: {
    margin: '8px 0px',
    fontWeight: 600
  },
  Button: {
    background: '#00f2fe',
    color: '#ffffff',
    '&:hover': {
      background: '#00f2fe',
      color: '#ffffff'
    }
  }
});

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const classes = useStyle();

  return (
    <div className="error-boundary-fallback">
      <ImageOops className="error-boundary-image" />
      <Typography className={classes.Typography}>Something went wrong!</Typography>
      <Typography className={classes.Typography}>{error.message}</Typography>
      <Button className={classes.Button} variant="contained" onClick={resetErrorBoundary}>
        Go back
      </Button>
    </div>
  );
};

export default ErrorFallback;
