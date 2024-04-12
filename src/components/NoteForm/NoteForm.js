import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mediaLink, setMediaLink] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, mediaLink, backgroundColor });
    // Reset form fields
    setTitle('');
    setDescription('');
    setMediaLink('');
    setBackgroundColor('');
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <form className="note-form" style={{alignSelf:"center"}} onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={mediaLink} onChange={(e) => setMediaLink(e.target.value)} placeholder="Image/Video Link" />
      {/* <div className="color-palette">
        <span className="color-option" style={{ backgroundColor: '#ffcccc' }} onClick={() => handleColorChange('#ffcccc')}></span>
        <span className="color-option" style={{ backgroundColor: '#ccffcc' }} onClick={() => handleColorChange('#ccffcc')}></span>
        <span className="color-option" style={{ backgroundColor: '#ccccff' }} onClick={() => handleColorChange('#ccccff')}></span>
        {/* Add more color options as needed */}
      {/* </div> */}
      <button className='add-button' style={{width:"150px",alignItems:"center",alignSelf:"center"}} type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
