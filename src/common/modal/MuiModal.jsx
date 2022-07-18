import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: 'none',
  outline: 'none',
  px: 4,
  py: 2,
};

const MuiModal = ({ component, children, open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{!component ? children : component}</Box>
    </Modal>
  );
};

MuiModal.defaultProps = {
  component: null,
};

export default MuiModal;
