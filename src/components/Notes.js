import { useContext, useState, useEffect, useRef } from "react";
import NoteContext from "../context/notes/noteContext";
import { Noteitem } from "./Noteitem";
import { AddNote } from "./AddNote";
import { useNavigate } from "react-router-dom";

export const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const { showAlert } = props;
    let navigate = useNavigate();

    // useEffect(() => {
    //     getNotes();
    //     // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    };

    const handleClick = (e) => {
        console.log("Updating the note...", note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        e.preventDefault();
        refClose.current.click();
        showAlert("Updated Successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <>
            <AddNote showAlert={showAlert} />
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary" disabled={note.etitle.trim().length < 3 || note.edescription.trim().length < 5}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Note</h2>
                <p className="my-2 mx-2">{notes.length === 0 && "No Notes to display!"}</p>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={showAlert} note={note} />
                })}
            </div>
        </>
    )
};