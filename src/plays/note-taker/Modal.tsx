import React, { useEffect, useState } from "react";
import { Note } from "./NoteTaker";
import "./NoteTaker.css";

const resetData = {
    title: "",
    content: "",
};

interface Props {
    currentNote: Note;
    handleDelete: ((id: string) => void);
    handleSave: ((title: string, content: string, id: string) => void);
    closeModal: () => void;
    resetCurrentNote: () => void;
}


const Modal = ({ currentNote, handleDelete, handleSave, closeModal, resetCurrentNote }: Props) => {
    const { title, content } = currentNote || resetData;
    const [data, setData] = useState({
        title, content
    });

    const onChangeData = (obj: object) => {
        setData({ ...data, ...obj });
    }

    const handleDeleteNote = () => {
        handleDelete(currentNote.id);
        resetCurrentNote();
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!data.title || !data.content) return;

        handleSave(data.title, data.content, currentNote?.id);
        setData(resetData);
        resetCurrentNote();
        closeModal();
    }

    //close the if touched on the overlay but outside the modal container
    useEffect(() => {
        const overlayEl = document.querySelector(".overlay");
        const closeOnClickOverlay = (e: MouseEvent) => {
            const target = e.target as HTMLDivElement;

            if (target.closest(".modal-container")) return;

            closeModal();
        }

        overlayEl?.addEventListener("click", closeOnClickOverlay);

        return () => {
            overlayEl?.removeEventListener("click", closeOnClickOverlay);
        }
    }, [])

    return (
        <div className="overlay" onSubmit={handleSubmit}>
            <form className="modal-container">
                <button className="close-modal-button">x</button>
                <div className="input-containers">
                    <textarea className="input-title" value={data.title} onChange={(e) => onChangeData({ title: e?.target.value })} placeholder="title" rows={3} />
                    <textarea className="input-title" value={data.content} onChange={(e) => onChangeData({ content: e?.target.value })} placeholder="content" rows={6} />
                </div>
                <div className="action-buttons">
                    <button className="delete-note" onClick={handleDeleteNote}>Delete</button>
                    <button className="save" type="submit" >Save</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;