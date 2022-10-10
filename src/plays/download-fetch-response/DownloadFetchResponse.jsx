import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PlayHeader from "common/playlists/PlayHeader";
import { useEffect, useState } from "react";
import { UseCustomFetchAPI } from "./CustomHooks/UseCustomFetchAPI";
import "./response.scss";

export default function DownloadFetchResponse(props) {
  const [endpoint, setEndpoint] = useState("");
  const [alertError, setAlertError] = useState();
  const [toBeFetched, setToBeFetched] = useState("");
  const { data, error, fetching } = UseCustomFetchAPI(toBeFetched);
  //Hook from mui to detect screen
  const matches = useMediaQuery('(min-width:650px)');
  useEffect(() => {
    const download = document.createElement("a");
    download.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], {
        type: "text/plain",
      })
    );
    download.setAttribute("download", `Play - ${new Date().getTime()}.json`);
    document.body.appendChild(download);
    if (!["", undefined, null].includes(toBeFetched?.trim()) && !error)
      download.click();
    document.body.removeChild(download);
  }, [data]);

  useEffect(() => {
    setAlertError(error);
  }, [error]);

  const reset = () => {
    setEndpoint("");
    setToBeFetched("");
  };
  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        {/* Your Code Starts Here */}
        <div className="fetch-download">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "10rem" }}
          >
            <Grid item xs={5}>
              <Card className={matches ? 'desk-screen' : 'other-screen'} sx={{ fontSize: 14 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Save Fetch API Response
                  </Typography>
                  <Typography variant="h5" component="div">
                    <div className="civ">
                      {!fetching ? (
                        <div className="clazz">
                          <input
                            placeholder={matches ? 'Paste/Type API endpoint here...' : 'Input Endpoint here..'}
                            type="textarea"
                            onChange={(e) => setEndpoint(e.target.value)}
                            value={endpoint}
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
                    disabled={["", null, undefined].includes(endpoint?.trim())}
                    onClick={() => setToBeFetched(endpoint)}
                    size="small"
                  >
                    Download
                  </Button>
                  <Button onClick={reset} size="small">
                    Reset
                  </Button>
                </CardActions>
              </Card>{" "}
            </Grid>
            <span className="note-txt flex justify-center items-center py-2">
              Note:Current version works for all valid GET API's(provided token is
              not mandatory)
            </span>
          </Grid>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={alertError}
            autoHideDuration={6000}
            onClose={() => setAlertError(false)}
          >
            <Alert
              onClose={() => setAlertError(false)}
              severity="error"
              sx={{ width: "100%" }}
            >
              Uh-Oh!Some Error happened.Please verify the API Endpoint
            </Alert>
          </Snackbar>
        </div>
        {/* Your Code Ends Here */}
      </div>
    </div >

  );
}
