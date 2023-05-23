import React, { useEffect,  useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useUserDisplayName, useUserId } from '@nhost/react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/joy/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  FetchALlEvents,
  insert_testimonial_submission
} from 'common/services/request/query/fetch-testimonials';
import { submit } from 'common/services/request';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TestmonialModal({ isOpen, setisOpen }) {
  const userDisplayName = useUserDisplayName();
  const userId = useUserId();
  const [testimonialData, settestimonialData] = useState({
    quote: '',
    title: '',
    event: '',
    id: userId
  });
  const [btndisabled, setbtndisabled] = useState(true);

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

    if (
      testimonialData.title.length != 0 &&
      testimonialData.quote.length != 0 
    ) {
      setbtndisabled(false);
    }
  };

  const AddTestimonial = async () => {
    try {
      let response = await submit(insert_testimonial_submission(testimonialData));
      setisOpen(false);
      toast.success('Testimonial added', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      return response;
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
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
              borderRadius: '40%',
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
                  fullWidth
                  onChange={updateData}
                />
              </Box>
              <Typography fontWeight="md">Enter your testimonial:</Typography>
              <textarea
                name="quote"
                onChange={updateData}
                rows="4"
                cols=""
                className="max-h-[150px] overflow-y-scroll rounded-md  resize-none border border-gray-400 p-1"
              />
              <Box />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: '10px 10px',
                  marginTop: '5px'
                }}
              >
                <Box>
                  <FormControl variant="standard" sx={{ minWidth: 110 }}>
                    <InputLabel id="demo-simple-select-standard-lable">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={testimonialData.event}
                      name="event"
                      onChange={updateData}
                      sx={{}}
                    >
                      {Events.map((category) => (
                        <MenuItem  key={category.id} value={category.id}>{category.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    marginTop: '3px'
                  }}
                >
                  <Button onClick={AddTestimonial} disabled={btndisabled}>
                    ADD
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
}
