import React from "react";
import { data } from "./AllOdiPlayers";
import { Fab, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SearchedPlayer = (props) => {
  console.log(props.filteredOptions.length);

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
        {props.filterOptions.map((player) => (
          <p1 key={player.No} className=" card ">
            <Paper elevation={15}>
              <div className="sub_title flex-itemsL">
                <Typography variant="h6" color="primary">
                  {player.Name}
                </Typography>
              </div>
              <Typography variant="h7" color="secondary">
                {player.First}-{player.Last} Matches: {player.Mat}
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={
                    <Fab color="primary" aria-label="add">
                      <ArrowDownwardIcon />
                    </Fab>
                  }
                  id="panel1-header"
                >
                  <Typography variant="h8" color="info">
                    {" "}
                    Batting Stats
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography sx={{ marginRight: 2 }}>
                      Inndings: {player.Inn}
                    </Typography>
                    <Typography>Not Outs: {player.NO}</Typography>
                    <Typography>Runs:{player.Runs}</Typography>
                    <Typography>HighScore:{player.HS}</Typography>
                    <Typography>Avg:{player.Avg}</Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography color="info"> Bowling Stats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Balls: {player.Balls}
                    Medin Overs:{player.Mdn}
                    Wickets:{player.Wkt}
                    Runs:{player.BowlRuns}
                    Avg:{player.BowlAvg}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography color="info"> Feilding Stats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Catches: {player.Ca}
                    Stumpings:{player.St}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </p1>
        ))}
      </div>
    </>
    // <>Hello</>
  );
};

export default SearchedPlayer;
