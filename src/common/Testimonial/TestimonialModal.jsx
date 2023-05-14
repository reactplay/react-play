import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useUserDisplayName } from "@nhost/react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import { Textarea } from "@mui/joy";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FetchALlEvents } from "common/services/request/query/fetch-testimonials";
import { submit } from "common/services/request";

export default function TestmonialModal({ isOpen, setisOpen }) {
  const userDisplayName = useUserDisplayName();
  const [age, setAge] = React.useState("");
  const [Events, setEvents] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fetchtestevents = async () => {
    const res = await submit(FetchALlEvents());
    setEvents(res);
  };

  useEffect(() => {
    fetchtestevents();
  }, []);

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={() => setisOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Thank You, {userDisplayName} !
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", p: "4px 0px", flexDirection: "column" }}
          >
            <Box
              component="div"
              sx={{ display: "flex", p: "5px 5px", flexDirection: "column" }}
            >
              <Box component="div" sx={{ display: "flex", mb: 3 }}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                />
              </Box>
              <Typography fontWeight="md">Enter your testimonial:</Typography>
              <Textarea size="sm" name="Size" minRows={8} maxRows={40} />
              <Box />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "17px 4px",
                }}
              >
                <Box>
                  <FormControl variant="filled" sx={{ minWidth: 110 }}>
                    <InputLabel id="demo-simple-select-filled-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age}
                      onChange={handleChange}
                    >
                      {Events.map((category) => (
                        <MenuItem value={category.testimonials_event.id}>
                          {category.testimonials_event.name}
                        </MenuItem>
                      ))}  
                    </Select>
                  </FormControl>
                </Box>
                <Button>ADD</Button>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
