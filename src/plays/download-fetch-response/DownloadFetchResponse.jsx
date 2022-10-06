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
} from "@mui/material";
import { useEffect, useState } from "react";
import { UseCustomFetchAPI } from "./CustomHooks/UseCustomFetchAPI";
import "./response.scss";

export default function DownloadFetchResponse() {
  const [endpoint, setEndpoint] = useState("");
  const [alertError, setAlertError] = useState();
  const [toBeFetched, setToBeFetched] = useState("");
  const { data, error, fetching } = UseCustomFetchAPI(toBeFetched);

  useEffect(() => {
    const download = document.createElement("a");
    download.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], {
        type: "text/plain",
      })
    );
    download.setAttribute("download", `Play - ${new Date().getTime()}.json`);
    document.body.appendChild(download);
    if (!["", undefined, null].includes(toBeFetched.trim()) && !error)
      download.click();
    document.body.removeChild(download);
  }, [data]);

  useEffect(() => {
    setAlertError(error);
  }, [error]);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", paddingTop: "15rem", background: "black" }}
      >
        <Grid item xs={5}>
          <Card sx={{ minWidth: 800 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Save Fetch API Response
              </Typography>
              <Typography variant="h5" component="div">
                <div className="civ">
                  {!fetching ? (
                    <div className="clazz">
                      <input
                        placeholder="Type/Paste API Endpoint here.."
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
                disabled={["", null, undefined].includes(endpoint.trim())}
                onClick={() => setToBeFetched(endpoint)}
                size="small"
              >
                Download
              </Button>
            </CardActions>
          </Card>{" "}
        </Grid>
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
    </>
  );
}
