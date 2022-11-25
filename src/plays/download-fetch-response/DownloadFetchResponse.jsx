import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import PlayHeader from 'common/playlists/PlayHeader';
import { useEffect, useState } from 'react';
import { UseCustomFetchAPI } from './CustomHooks/UseCustomFetchAPI';
import './response.scss';

export default function DownloadFetchResponse(props) {
  const [endpoint, setEndpoint] = useState('');
  const [alertError, setAlertError] = useState();
  const [toBeFetched, setToBeFetched] = useState('');
  const { data, error, fetching } = UseCustomFetchAPI(toBeFetched);
  // Hook from mui to detect screen
  const matches = useMediaQuery('(min-width:650px)');
  useEffect(() => {
    const download = document.createElement('a');
    download.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], {
        type: 'text/plain'
      })
    );
    download.setAttribute('download', `Play - ${new Date().getTime()}.json`);
    document.body.appendChild(download);
    if (!['', undefined, null].includes(toBeFetched?.trim()) && !error) download.click();
    document.body.removeChild(download);
  }, [data]);

  useEffect(() => {
    setAlertError(error);
  }, [error]);

  const reset = () => {
    setEndpoint('');
    setToBeFetched('');
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        {/* Your Code Starts Here */}
        <div className="fetch-download">
          <Grid
            container
            alignItems="center"
            direction="column"
            justify="center"
            spacing={0}
            style={{ paddingTop: '10rem' }}
          >
            <Grid item xs={10}>
              <Card className={matches ? 'desk-screen' : 'other-screen'} sx={{ fontSize: 14 }}>
                <CardContent className="check">
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    Save Fetch API Response
                  </Typography>
                  <Typography component="div" variant="h5">
                    <div className="civ">
                      {!fetching ? (
                        <div className="clazz">
                          <input
                            placeholder={
                              matches ? 'Paste/Type API endpoint here...' : 'Input Endpoint here..'
                            }
                            type="textarea"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                          />
                        </div>
                      ) : (
                        <span>Fetching.....</span>
                      )}
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    disabled={['', null, undefined].includes(endpoint?.trim())}
                    size="small"
                    onClick={() => setToBeFetched(endpoint)}
                  >
                    Download
                  </Button>
                  <Button size="small" onClick={reset}>
                    Reset
                  </Button>
                </CardActions>
              </Card>{' '}
            </Grid>
            <span className="note-txt flex justify-center items-center py-2">
              Note:Current version works for all valid GET API's(provided token is not mandatory)
            </span>
          </Grid>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={6000}
            open={alertError}
            onClose={() => setAlertError(false)}
          >
            <Alert severity="error" sx={{ width: '100%' }} onClose={() => setAlertError(false)}>
              Uh-Oh!Some Error happened.Please verify the API Endpoint
            </Alert>
          </Snackbar>
        </div>
        {/* Your Code Ends Here */}
      </div>
    </div>
  );
}
