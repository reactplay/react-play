import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { data } from "./AllOdiPlayers";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import DryIcon from "@mui/icons-material/Dry";
import { Button, Chip, Fab, Paper, Stack } from "@mui/material";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(item);

  const handleInputChange = (event, value) => {
    setInputValue(value);

    const filtered = item.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  var temp = [];
  data.map((player) => {
    temp.push({
      label: player.Name,
      id: player.No,
      First: player.First,
      Last: player.Last,
      Mat: player.Mat,
      Inn: player.Inn,
      NO: player.NO,
      Runs: player.Runs,
      HS: player.HS,
      Avg: player.Avg,
      Balls: player.Balls,
      Mdn: player.Mdn,
      BowlRuns: player.BowlRuns,
      Wkt: player.Wkt,
      BBM: player.BBM,
      BowlAvg: player.BowlAvg,
      Ca: player.Ca,
      St: player.St,
    });
  });

  useEffect(() => {
    if (value.length < 1) {
      return;
    }
    if (value.length === 1) {
      props.handleSearch();
    }
    setItem(temp);
  }, [value]);

  return (
    <>
      <>
        <Autocomplete
          disablePortal
          options={item}
          getOptionLabel={(option) => option.label}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          sx={{ width: 500, background: "#650e0e" }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth={true}
              label="Search for Player"
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent",
                  }}
                >
                  {item.label}
                </div>
              )}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disablePortal
            />
          )}
        />
      </>
      {value.length !== 0 ? (
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
            {filteredOptions.map((player) => (
              <p1 className=" card ">
                <Paper elevation={15}>
                  <div className="sub_title flex-itemsL">
                    <Typography variant="h6" color="primary">
                      {player.label}
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
      ) : null}
    </>
  );
};

export default SearchBar;
