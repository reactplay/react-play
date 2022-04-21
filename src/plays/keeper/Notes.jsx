import { FaTrashAlt } from 'react-icons/fa';
function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    return <>
        <div className="note">
            <h1 className='notesHeading'>{props.title}</h1>
            <p className='notesPara'>{props.content}</p>
            <button className='notesButton' onClick={handleClick}><FaTrashAlt /></button>
        </div>
    </>
}
export default Note;