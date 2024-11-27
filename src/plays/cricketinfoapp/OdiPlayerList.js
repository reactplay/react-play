import React from "react";
import { data } from "./AllOdiPlayers";
import { Button, Chip, Fab, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import DryIcon from "@mui/icons-material/Dry";

const OdiPlayerList = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 14, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
      </Grid>
      <div className="flex-containerL">
        {data.map((player) => (
          <p1 key={player.No} className=" card ">
            <Paper elevation={15}>
              <div className="sub_title flex-itemsL">
                <Typography variant="h5" color="primary">
                  {player.Name}
                </Typography>
              </div>
              <Stack direction="row">
                <Typography
                  sx={{ marginLeft: 8, marginRight: 3, color: "#ff0000" }}
                  fontSize={13}
                >
                  {player.First}-{player.Last}
                </Typography>
                <Typography
                  sx={{ marginLeft: 3, color: "#ff0000" }}
                  fontSize={13}
                >
                  Matches: {player.Mat}
                </Typography>
              </Stack>

              <Accordion>
                <AccordionSummary
                  expandIcon={
                    <Fab size="small" color="warning">
                      <ArrowDownwardIcon />
                    </Fab>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Button
                    endIcon={<SportsCricketIcon size="large" />}
                    size="small"
                  >
                    <Typography variant="h8" color="info">
                      {" "}
                      Batting Stats
                    </Typography>
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <Chip
                    color="success"
                    variant="outlined"
                    label={`Inndings: ${player.Inn}`}
                    sx={{ m: 0.2 }}
                  />
                  <Chip
                    color="success"
                    variant="outlined"
                    label={`Not Outs: ${player.NO}`}
                    sx={{ m: 0.2 }}
                  />
                  <Chip
                    color="success"
                    variant="outlined"
                    label={`Runs:${player.Runs}`}
                    sx={{ m: 0.2 }}
                  />
                  <Chip
                    color="success"
                    variant="outlined"
                    label={`HighScore:${player.HS}`}
                    sx={{ m: 0.2 }}
                  />

                  <Chip
                    color="success"
                    variant="outlined"
                    label={`Avg:${player.Avg}`}
                    sx={{ m: 0.2 }}
                  />
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={
                    <Fab size="small" color="warning">
                      <ArrowDownwardIcon />
                    </Fab>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Button
                    endIcon={<SportsBaseballIcon size="small" />}
                    size="small"
                  >
                    <Typography variant="h8" color="info">
                      {" "}
                      Bowling Stats
                    </Typography>
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Balls: ${player.Balls}`}
                      sx={{ m: 0.2 }}
                    />
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Medin Overs:${player.Mdn}`}
                      sx={{ m: 0.2 }}
                    />
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Wickets:${player.Wkt}`}
                      sx={{ m: 0.2 }}
                    />
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Runs:${player.BowlRuns}`}
                      sx={{ m: 0.2 }}
                    />
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Avg:${player.BowlAvg}`}
                      sx={{ m: 0.2 }}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={
                    <Fab size="small" color="warning">
                      <ArrowDownwardIcon />
                    </Fab>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Button endIcon={<DryIcon size="small" />} size="small">
                    <Typography variant="h8" color="info">
                      {" "}
                      Feilding Stats
                    </Typography>
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Catches: ${player.Ca}`}
                      sx={{ m: 0.2 }}
                    />
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`Stumpings:${player.St}`}
                      sx={{ m: 0.2 }}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </p1>
        ))}
      </div>
    </>
  );
};

export default OdiPlayerList;
