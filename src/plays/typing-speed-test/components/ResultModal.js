import { Modal } from "@mui/material";
import "../styles.css";

const ResultModal = ({ open, handleModalClose, wpm, cpm, accuracy }) => {
  return (
    <Modal open={open} onClose={handleModalClose}>
      <div className="result__modal ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[1.05rem] tracking-wide my-4 leading-9">
            {wpm >= 40
              ? "Excellent..!"
              : wpm >= 30
              ? "Good Job..!"
              : "Nice...!"}{" "}
            You type with the speed of{" "}
            <span className="bg-violet-100 text-violet-500 font-bold">
              {wpm} WPM
            </span>{" "}
            ({cpm} CPM). Your accuracy was{" "}
            <span className="font-bold">{isNaN(accuracy) ? 0 : accuracy}%</span>{" "}
            Keep practicing!
          </h1>

          <button
            className="mt-4 text-center bg-violet-500 px-5 py-[0.7rem] text-sm text-white rounded-[4px] font-medium"
            onClick={handleModalClose}
          >
            Try Again
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;
