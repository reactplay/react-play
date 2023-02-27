import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { SnippetsData } from '../../CodeSnips';
import NewSnippet from './NewSnippet';

const HomePage = () => {
  const { snipData, updateSnip } = React.useContext(SnippetsData);

  const removeSnip = (id) => {
    let i = snipData.length;
    let copySnips = [...snipData];
    while (i--) {
      if (snipData[i] && snipData[i].id === id) {
        copySnips.splice(i, 1);
      }
    }
    updateSnip(copySnips);
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={4} sx={{ padding: '8px' }}>
        {snipData.map((snippet) => {
          return (
            <Grid item key={snippet.id} md={3} sm={4} sx={{}} xs={6}>
              <Card
                sx={{
                  maxWidth: 300
                }}
              >
                <CardContent
                  sx={{
                    maxWidth: 300,
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Link style={{ textDecoration: 'none' }} to={'code-snips/snippet/' + snippet.id}>
                    <div
                      className="mainContent"
                      style={{
                        display: 'flex',
                        flex: '1 0 auto',
                        alignItems: 'flex-start',
                        justifyContent: 'start',
                        flexDirection: 'column'
                      }}
                    >
                      <Typography gutterBottom component="div" variant="h5">
                        {snippet.name}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 3
                        }}
                        variant="body2"
                      >
                        <b>{snippet.description}</b>
                      </Typography>
                      <Typography
                        gutterBottom
                        color="text.secondary"
                        sx={{
                          fontSize: 12,
                          marginTop: '16px'
                        }}
                      >
                        {snippet.language}
                      </Typography>
                    </div>
                  </Link>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '16px'
                    }}
                  >
                    <Button color="error" variant="outlined" onClick={() => removeSnip(snippet.id)}>
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <NewSnippet />
    </>
  );
};

export default HomePage;
