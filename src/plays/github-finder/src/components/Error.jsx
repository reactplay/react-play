import React from 'react';
import Alert from '@mui/material/Alert';

export default function Error() {
  return (
    <div className="error-container">
      <Alert severity="error">Sorry, Invalid username!! Try again</Alert>
    </div>
  );
}
