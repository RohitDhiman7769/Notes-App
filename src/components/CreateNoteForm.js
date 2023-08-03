import { useState } from "react";
import axios from "axios";
import "../App.css"
const CreateNoteForm = ({
    notes,
    setNotes
}) => {
    const [file, setFile] = useState(null);
    const [currentNote, setCurrentNote] = useState("");

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(currentNote.length === 0) {
            return;
        }
        setNotes([...notes, { id: notes.length + 1, value: currentNote }]);
        setCurrentNote("");
    }

    const handleImageSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', file[0]);

        axios.post("http://localhost:4000/upload", data)
            .then(res => { 
                console.log(res);
            })
    }

    const handleFileChange = (event) => {
        setFile(event.target.files);
        console.log(event.target.files)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='notes-form'>
                <label>Enter the Note Title</label>
                <input type='text' value={currentNote} style={{ width: "50%", alignSelf: "center" }} onChange={(e) => setCurrentNote(e.target.value)} />
            </form>
            <form>
                <input type='file' accept=".jpg" multiple id="file" onChange={handleFileChange}/>
                <button
                    onClick={handleImageSubmit}
                >Upload</button>
            </form>
        </div>
    )
};

export default CreateNoteForm;
