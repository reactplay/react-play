import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useUserDisplayName } from "@nhost/react";
import { Box } from "@mui/material";
import Button from "@mui/joy/Button";
import { Textarea } from "@mui/joy";
import CustomDropDown from "./CustomDropDown";

export default function TestmonialModal({ isOpen, setisOpen }) {
  const userDisplayName = useUserDisplayName();
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
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography fontWeight="md">
                Enter your testimonial:
              </Typography>
              <Textarea
                size="sm"
                name="Size"
                minRows={8}
                maxRows={40}
              />
              <Box />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "17px 4px",
                }}
              >
                <CustomDropDown />
                <Button>ADD</Button>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
