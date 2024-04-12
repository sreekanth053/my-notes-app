import React from "react";
import "./NoteList.css";

const NoteList = ({ notes, onClickNote, onDeleteNote }) => {
  // Check if notes array is valid and not empty
  if (!notes || notes.length === 0) {
    return <div className="note-list">No notes to display.</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note-item"
          onClick={() => onClickNote && onClickNote(note.id)}
        >
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <div className="image-url">
            {note.mediaType === "image" && (
              <img src={note.mediaUrl} alt="Note" className="note-media" />
            )}
            {note.mediaType === "video" && (
              <video controls className="note-media">
                <source src={note.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {/* You might want to handle cases where onDeleteNote is not provided */}
            <img src={note.mediaUrl} alt="img" />
            <button
              className="delete-button"
              onClick={() => onDeleteNote && onDeleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
