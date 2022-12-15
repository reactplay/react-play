// All necessary dependences
import { AiOutlineCheck } from 'react-icons/ai'
import { BsCheckAll, BsPencilSquare, BsTrash } from 'react-icons/bs'
import { useGlobalContext } from '../context/appContext'
import { formatDate } from '../helper/dateFormater'

// ToDoList
const TodoList = ({ filterdTasks, editHandler }) => {
  const { setIsModalOpen, setDeleteId, setAllSelected, completeHandler } =
    useGlobalContext()
  return (
    <>
      <table className='wa_list-area'>
        <thead className='wa_table-header'>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filterdTasks.map((item, index) => {
            const { id, createdAt, title, complete } = item
            return (
              <tr key={index}>
                <td width=''>{index === 0 ? 1 + '.' : index + 1 + '.'}</td>
                <td width='100%'>
                  <p className={`wa_item ${complete ? 'completed' : ''}`}>
                    {title}
                  </p>
                </td>
                <td>
                  <p className='wa_date'>{formatDate(createdAt)}</p>
                </td>
                <td>
                  {complete ? (
                    <span className='status completed'>Completed</span>
                  ) : (
                    <span className='status active'>Active</span>
                  )}
                </td>
                <td width='' className=''>
                  <div className='wa_action'>
                    <button
                      disabled={complete ? true : false}
                      title='Complete'
                      className={`wa_btn wa_action-btn wa_complete-btn ${
                        complete ? 'wa_task-completed' : ''
                      }`}
                      onClick={() => {
                        completeHandler(id)
                      }}
                    >
                      {complete ? <BsCheckAll /> : <AiOutlineCheck />}
                    </button>
                    <button
                      title='Update'
                      className='wa_btn wa_action-btn wa_update-btn'
                      onClick={() => {
                        editHandler(id)
                      }}
                    >
                      <BsPencilSquare />
                    </button>
                    <button
                      title='Delete'
                      className='wa_btn wa_action-btn wa_delete-btn'
                      onClick={() => {
                        setIsModalOpen(true)
                        setDeleteId(id)
                      }}
                    >
                      <BsTrash />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
        {filterdTasks.length > 1 && (
          <tfoot>
            <tr>
              <td colSpan={5}>
                <button
                  className='wa_btn wa_delete-all'
                  onClick={() => {
                    setAllSelected(true)
                    setIsModalOpen(true)
                  }}
                >
                  Delete All
                </button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  )
}

export default TodoList
