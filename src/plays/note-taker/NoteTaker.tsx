import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Modal from './Modal';
import './NoteTaker.css';

// generate unique id's for all the notes
const uniqid = () => "note-id" + Math.random().toString(16).slice(2);

export interface Note {
    id: string;
    title: string;
    content: string;
    isPinned: boolean;
}

const NoteTaker = () => {
    const initialCurrentNote = {
        id: "",
        content: "",
        title: "",
        isPinned: false
    };
    // states
    const [notes, setNotes] = useState<Note[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentNote, setCurrentNote] = useState<Note>(initialCurrentNote);
    const containerRef = useRef(null);
    const [searchedVal, setSearchedVal] = useState<string>("");

    // helper functions
    const mutatePropById = (id: string, changesObj: object) => setNotes(notes.map((note) => note.id === id ? { ...note, ...changesObj } : note));

    const getNoteById = (id: string) => notes.find((curr) => curr.id === id);

    const setIsPinnedById = (id: string, isPinned: boolean) => mutatePropById(id, { isPinned });

    const closeModal = () => setIsModalOpen(false);

    const resetCurrentNote = () => setCurrentNote(initialCurrentNote);

    // Action events
    const handleSave = (title: string, content: string, id: string) => {
        if (!id) {
            setNotes([...notes, { id: uniqid(), title, content, isPinned: false }])
            setIsModalOpen(false);
            return;
        }
        mutatePropById(id, { title, content, isPinned: false });
        setIsModalOpen(false);
    }

    const handleEditNote = (id: string) => {
        setCurrentNote(getNoteById(id));
        setIsModalOpen(true);
    }

    const handleDelete = (id: string = "") => {
        if (!id) {
            setIsModalOpen(false);
            return;
        }
        setNotes(notes.filter((curr) => curr.id !== id));
        setIsModalOpen(false);
    }

    // list of conditionally rendered notes
    const renderNotes = (isPinned: boolean) => (notes.filter((note) => (note.isPinned === isPinned) && ((note.content + note.title).includes(searchedVal))).map(({ id, title, content, isPinned }) => <Card setIsPinnedById={setIsPinnedById} title={title} content={content} id={id} isPinned={isPinned} handleDelete={handleDelete} handleEditNote={handleEditNote} />))

    return (
        <div className="note-taker">
            <h2>Note Taker</h2>
            <button className="create-button" onClick={() => setIsModalOpen(true)}>+</button>
            {
                isModalOpen && <Modal currentNote={currentNote} closeModal={closeModal} handleDelete={handleDelete} handleSave={handleSave} resetCurrentNote={resetCurrentNote} />
            }
            <div className="search-container">
                <h4>Search Notes:</h4>
                <input className="search-bar" type="text" value={searchedVal} onChange={(e) => setSearchedVal(e.target.value)} placeholder="Enter keywords for search" />
            </div>
            <div className="notes" ref={containerRef}>
                <div className="pinned-notes-container">
                    <h3>Pinned Notes:</h3>
                    <div className="pinned-notes">
                        {
                            !renderNotes(true).length ? "No pinned notes are available" : renderNotes(true)
                        }
                    </div>
                </div>
                <div className="other-notes-container">
                    <h3>Other Notes:</h3>
                    <div className="other-notes">
                        {
                            !renderNotes(false).length ? "Only pinned notes are available" : renderNotes(false)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NoteTaker;