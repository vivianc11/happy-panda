import React, { useState, useReducer } from "react";
import './style.css';
import { v4 as uuid } from 'uuid';

const initialNoteState = {
    lastNoteCreated: null,
    totalNotes: 0,
    notes: [],
};

// reducer function
const notesReducer = (prevState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_NOTE' : {
            const newState = {
                lastNoteCreated: new Date().toTimeString().slice(0,8),
                totalNotes: prevState.notes.length +1,
                notes: [...prevState.notes, action.payload]
            };

            console.log('After ADD_NOTE: ', newState);
            return newState;
        }

        case 'DELETE_NOTE': {
            const newState = {
                ...prevState,
                totalNotes: prevState.notes.length - 1,
                notes: prevState.notes.filter(note => note.id !== action.payload.id)
            };

            console.log('After DELETE_NOTE:', newState);
            return newState;
        }
    }
};

export default function Note() {
    const [noteInput, setNoteInput] = useState('');
    const [notesState, dispatch] = useReducer(notesReducer, initialNoteState);

    const addNote = event => {
        event.preventDefault();

        if(!noteInput) {
            return;
        }

        const newNote = {
            id: uuid(),
            text: noteInput,
            rotate: Math.floor(Math.random() *5),
        };

        dispatch({ type: 'ADD_NOTE', payload: newNote });
        setNoteInput('');
    };
    
    const dropNote = event => {
        event.target.style.left = `${event.pageX - 50}px`;
        event.target.style.top = `${event.pageY- 50}px`;
    }

    const dragOver = event => {
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <div onDragOver={dragOver}>
            <h1>Notes ({ notesState.totalNotes })</h1>
            
            <form onSubmit={addNote} className="note-form">
                <textarea value={noteInput}
                    onChange={event => setNoteInput(event.target.value)}
                    placeholder="How did this make you feel?"></textarea>
                <button>Add Your Thoughts</button>
            </form>

            { notesState
                .notes
                .map(note => (
                    <div className="note"
                        style={{ transform: `rotate(${note.rotate}deg)`}}
                        draggable='true'
                        onDragEnd={dropNote}
                        key={note.id}
                        >

                        <div onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note })} className="close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        </div>

                        <pre className="text">{note.text}</pre>
                    </div>
                ))
            }
        </div>
    );
}