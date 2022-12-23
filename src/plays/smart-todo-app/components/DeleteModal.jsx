import { useGlobalContext } from '../context/appContext'

const DeleteModal = () => {
  const {
    setIsModalOpen,
    removeItem,
    setDeleteId,
    allSelected,
    setAllSelected,
    removeAllItems,
  } = useGlobalContext()
  return (
    <div className='wa_warning'>
      <div className='wa_wrapper-modal'>
        <span>!</span>
        <h3>Confirm</h3>
        <p>
          Are you sure you want to permanently delete{' '}
          {allSelected ? 'all tasks' : 'this task'}?
        </p>
        <div className='wa_buttons'>
          <button
            className='wa_btn wa_warning-btn yes'
            onClick={() => {
              removeItem()
              removeAllItems()
            }}
          >
            Yes, Delete
          </button>
          <button
            className='wa_btn wa_warning-btn cancel'
            onClick={() => {
              setDeleteId(null)
              setIsModalOpen(false)
              setAllSelected(false)
            }}
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
