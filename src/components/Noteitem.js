import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote, showAlert } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-3"
                            onClick={() => {
                                deleteNote(note._id);
                                showAlert("Deleted Successfully", "success");
                            }}
                        // onClick={() => {
                        //     if (window.confirm("Are you sure you want to delete this note?")) {
                        //         deleteNote(note._id);
                        //     }
                        // }}
                        ></i>
                        <i className="fa-regular fa-pen-to-square mx-2"
                            onClick={() => { updateNote(note); }}>
                        </i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
};