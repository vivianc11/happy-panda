import React, { useState, useReducer } from "react";
import './style.css';
import { v4 as uuid } from 'uuid';
import { ADD_THOUGHT } from "../../utils/mutations";
import { useMutation } from '@apollo/client';

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
    // const [formState, setFormState] = useState({
    //     noteText: '',
    //   });
    // eslint-disable-next-line no-unused-vars
    const [addThought, { error, data }] = useMutation(ADD_THOUGHT);

      // update state based on form input changes
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//         ...formState,
//         [name]: value,
//         });
//     };

//       // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log("this is form state")
//         console.log(noteText);

//         try {
//             const { data } = await addThought({
//                 variables: { ...formState },
//         });
//         console.log("this is going to mutation")
//         console.log(data);

//         } catch (e) {
//           console.error(e);
//     }
//   };

    const [noteText, setNoteText] = useState('');
    const [notesState, dispatch] = useReducer(notesReducer, initialNoteState);

    const addNote = async event => {
        event.preventDefault();

        if(!noteText) {
            return;
        }

        const newNote = {
            id: uuid(),
            text: noteText,
            rotate: Math.floor(Math.random() *5),
        };

        dispatch({ type: 'ADD_NOTE', payload: newNote });

        // This will allow you to store the data
        try { 
            // eslint-disable-next-line no-unused-vars
            const { data } = await addThought({
                variables: { noteText: noteText}
            })
            console.log("It works")

        } catch(err){
            console.log("It failed")
        }

        // This will clear out the data in the textarea with onClick
        // Want to do it in this order so that store the text THEN clear the value
        setNoteText('');
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
            {/* <form onSubmit={() => {addNote(); handleFormSubmit()}}  */}
            
            <form className="note-form">
                
            <h1>Notes ({ notesState.totalNotes })</h1>
                <textarea value={noteText}
                    onChange={event => setNoteText(event.target.value)}
                    placeholder="How did this make you feel?">
                </textarea>
                <button onClick={addNote}>
                    Add your thoughts, and move them around!
                </button>
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