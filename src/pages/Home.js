import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SortOptions from "../components/SortOptions/SortOptions";
import NoteList from "../components/NoteList/NoteList";
import NoteForm from "../components/NoteForm/NoteForm";
import "./Home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [sortBy, setSortBy] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new note
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Function to handle note selection
  const handleNoteClick = (noteId) => {
    const selected = notes.find((note) => note.id === noteId);
    setSelectedNote(selected);
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Function to handle sort change
  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  // Function to delete a note by ID
  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    setSelectedNote(null); // Reset selectedNote if the deleted note was selected
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort notes based on sort order
  const sortedNotes = filteredNotes.sort((a, b) => {
    if (sortBy === "ascending") {
      return a.timestamp - b.timestamp;
    } else {
      return b.timestamp - a.timestamp;
    }
  });

  return (
    <div className="home">
      <h3>Take Notes!</h3>
      <NoteForm onSubmit={addNote} />
      <div className="search-filter">
        <SearchBar onSearch={handleSearch} />
        <SortOptions onSortChange={handleSortChange} />
      </div>
      <NoteList
        notes={sortedNotes}
        onClickNote={handleNoteClick}
        onDeleteNote={handleDeleteNote} // Pass the updated handleDeleteNote function
      />
    </div>
  );
};

export default Home;
