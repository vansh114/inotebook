import { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

export const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const { showAlert } = props;
    
    const [note, setNote] = useState({title: "", description: "", tag: ""});
    
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        showAlert("Added Successfully", "success");
    };
    
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    };
    
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={3} required />
                </div> 
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.trim().length < 3 || note.description.trim().length < 5}>Add Note</button>
            </form>
        </div>
    )
};