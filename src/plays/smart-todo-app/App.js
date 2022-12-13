// All necessary dependences
import { useRef, useState, useEffect } from 'react'
import { BsPencil } from 'react-icons/bs'
import Alert from './components/Alert'
import TodoList from './components/TodoList'
import Logo from './assets/logo.png'
import DeleteModal from './components/DeleteModal'
import { useGlobalContext } from './context/appContext'
import Filter from './components/Filter'

// App
function App() {
  // All necessary states
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditId] = useState(null)
  const editRef = useRef()

  const {
    isModalOpen,
    tasks,
    setTasks,
    filterdTasks,
    showAlert,
    alert,
    setAlert,
  } = useGlobalContext()

  // Form submit handler method
  const submitHandler = (e) => {
    // Reset default behavior
    e.preventDefault()

    if (!text) {
      //if input is empy
      showAlert(true, 'Field is required!', 'danger')
    } else if (text && isEditing) {
      // Update the item & states
      const updatedTasks = tasks.map((item) => {
        if (item.id === editID) {
          return {
            ...item,
            title: text,
            createdAt: new Date(),
            complete: false,
          }
        } else {
          return item
        }
      })
      setTasks(updatedTasks)
      setText('')
      setEditId(null)
      setIsEditing(false)

      // Update item alert
      setAlert({ show: true, msg: 'Updated Successfully!', type: 'success' })
    } else {
      // Add item
      const newTask = {
        id: tasks.length + 1,
        createdAt: new Date(),
        complete: false,
        title: text,
      }
      setTasks([newTask, ...tasks])
      setText('')

      // Success Alert
      showAlert(true, 'Added successfully!', 'success')
    }
  }

  // Edit specific task
  const editHandler = (id) => {
    const spesificItem = tasks.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setText(spesificItem.title)
  }

  useEffect(() => {
    if (editRef.current) {
      const end = editRef.current.value.length
      editRef.current.setSelectionRange(end, end)
      editRef.current.focus()
    }
  }, [isEditing])

  return (
    <section id='wa_todo-list'>
      {isModalOpen && <DeleteModal />}
      <div className='wrapper'>
        <div className='wa_header'>
          <div className='wa_logo-area'>
            <div style={{ width: '148px' }}>
              <img width={'100%'} src={Logo} alt='to do list' />
            </div>
          </div>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={tasks} />
          )}
          <Filter />
        </div>
        <div className='wa_body'>
          {filterdTasks.length > 0 ? (
            <TodoList filterdTasks={filterdTasks} editHandler={editHandler} />
          ) : (
            <p className='empty'>No item found!</p>
          )}
        </div>
        <div className='wa_footer'>
          <form onSubmit={submitHandler}>
            <div className='wa_form-group'>
              <span>
                <BsPencil fill='#fff' />
              </span>
              <input
                ref={editRef}
                className='wa_form-control'
                type='text'
                placeholder='Enter task'
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                }}
              />
              <button className='wa_btn'>
                {isEditing ? 'Update' : 'Add Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App
