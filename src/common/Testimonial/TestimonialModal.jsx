import React, { useEffect, useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useUserDisplayName, useUserId } from '@nhost/react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/joy/Button';
import { Textarea } from '@mui/joy';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  FetchALlEvents,
  insert_testimonial_submission
} from 'common/services/request/query/fetch-testimonials';
import { submit } from 'common/services/request';

export default function TestmonialModal({ isOpen, setisOpen }) {
  const userDisplayName = useUserDisplayName();
  const userId = useUserId();
  const [testimonialData, settestimonialData] = useState({
    quote: '',
    title: '',
    event: '',
    id: userId
  });

  const [Events, setEvents] = useState([]);

  const fetchtestevents = async () => {
    const res = await submit(FetchALlEvents());
    setEvents(res);
  };

  useEffect(() => {
    fetchtestevents();
  }, []);

  const updateData = (e) => {
    const fieldName = e.target.name;
    settestimonialData((prev) => ({
      ...prev,
      [fieldName]: e.target.value
    }));
  };

  const AddTestimonial = async () => {
    return await Promise.all([submit(insert_testimonial_submission(testimonialData))]).catch(
      (err) => Promise.reject(err)
    );
  };

  console.log(testimonialData);

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={() => setisOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg'
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body'
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
          <Box component="div" sx={{ display: 'flex', p: '4px 0px', flexDirection: 'column' }}>
            <Box component="div" sx={{ display: 'flex', p: '5px 5px', flexDirection: 'column' }}>
              <Box component="div" sx={{ display: 'flex', mb: 3 }}>
                <TextField
                  id="standard-basic"
                  name="title"
                  label="Title"
                  variant="standard"
                  onChange={updateData}
                />
              </Box>
              <Typography fontWeight="md">Enter your testimonial:</Typography>
              <Textarea size="sm" name="quote" minRows={8} maxRows={40} onChange={updateData} />
              <Box />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '17px 4px'
                }}
              >
                <Box>
                  <FormControl variant="filled" sx={{ minWidth: 110 }}>
                    <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={testimonialData.event}
                      name="event"
                      onChange={updateData}
                    >
                      {Events.map((category) => (
                        <MenuItem value={category.testimonials_event.id}>
                          {category.testimonials_event.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Button onClick={AddTestimonial}>ADD</Button>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
