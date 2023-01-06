import { useGlobalContext } from '../context/appContext';

const DeleteModal = () => {
  const { setIsModalOpen, removeItem, setDeleteId, allSelected, setAllSelected, removeAllItems } =
    useGlobalContext();

  return (
    <div className="wa__warning">
      <div className="wa__wrapper-modal">
        <span>!</span>
        <h3>Confirm</h3>
        <p>
          Are you sure you want to permanently delete {allSelected ? 'all tasks' : 'this task'}?
        </p>
        <div className="wa__buttons">
          <button
            className="wa__btn wa__warning-btn yes"
            onClick={() => {
              removeItem();
              removeAllItems();
            }}
          >
            Yes, Delete
          </button>
          <button
            className="wa__btn wa__warning-btn cancel"
            onClick={() => {
              setDeleteId(null);
              setIsModalOpen(false);
              setAllSelected(false);
            }}
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
