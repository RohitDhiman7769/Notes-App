import { useState } from 'react';
import './App.css';
import CreateNoteForm from './components/CreateNoteForm';
import NoteCard from './components/NoteCard';

function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateNote, setUpdateNote] = useState(null);
  const [notes, setNotes] = useState([]);

  // ['vishal', 'hello', 'vishal', 'hello']
  // [{id: 1, value: 'vishal'}, {id: 2, value: 'hello'}, {id: 3, value: 'vishal'}, {id: 4, value: 'hello'}]

  const onDelete = (id) => {
    const updatedNotes = notes.filter((n) => n.id !== id);
    setNotes(updatedNotes);
  }

  const onUpdate = (note) => {
    setIsUpdating(true);
    setUpdateNote(note);
  }

  const onCancel = () => {
    setIsUpdating(false);
    setUpdateNote(null);
  }

  const onNoteValueChange = (e) => {
    setUpdateNote({
      ...updateNote,
      value: e.target.value
    });

    console.log(e.target.value);
  }
  const onSaveChanges = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updateNote.id) {
        note.value = updateNote.value;
      }
      return note;
    });

    setNotes(updatedNotes);
    setIsUpdating(false);
    setUpdateNote(null);
  }

  return (
    <div className="App">
      <CreateNoteForm notes={notes} setNotes={setNotes} />
      <div className="card-wrapper">
        {
          notes.map((note) => (
            <NoteCard isUpdating={isUpdating} note={note} onCancel={onCancel} onDelete={onDelete} onNoteValueChange={onNoteValueChange} onSaveChanges={onSaveChanges} onUpdate={onUpdate} updateNote={updateNote} key={note.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
