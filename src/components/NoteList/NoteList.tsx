"use client";

import React, { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';

const NoteList = ({ notes, openNote, deleteNote }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setSelectedNoteIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNoteIndex(null);
  };

  const handleConfirmDelete = () => {
    deleteNote(selectedNoteIndex);
    handleCloseModal();
  };

  return (
    <div className="space-y-4">
      {notes.map((note, index) => (
        <div key={index} className="p-4 border border-gray-700 rounded-md shadow-sm bg-gray-800">
          <h3 className="text-lg font-medium text-white">{note.title}</h3>
          <p className="text-gray-300">{note.description}</p>
          <div className="mt-2 flex space-x-2">
            <button 
              onClick={() => openNote(note)} 
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Ver
            </button>
            <button 
              onClick={() => handleDeleteClick(index)} 
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
      <DeleteModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmDelete} 
      />
    </div>
  );
};

export default NoteList;
