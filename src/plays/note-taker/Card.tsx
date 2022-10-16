import React from "react";
import './NoteTaker.css';

interface Props {
    id: string; 
    title: string; 
    content: string; 
    isPinned: boolean; 
    setIsPinnedById: ((id: string, isPinned: boolean) => void); 
    handleDelete: ((id: string) => void); 
    handleEditNote: ((id: string) => void);
}

const Card = ({ id, title, content, isPinned, setIsPinnedById, handleDelete, handleEditNote }: Props) => {
    return (
        <div className="note" data-id={id} data-ispinned={isPinned} key={id}>
            <h4>{title}</h4>
            <p>{content}</p>
            <div className="note-actions">
                <button className="pin-button" onClick={() => setIsPinnedById(id, !isPinned)}>{isPinned ? "Un-pin" : "Pin"}</button>
                <button className="edit-button" onClick={() => handleEditNote(id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Card;