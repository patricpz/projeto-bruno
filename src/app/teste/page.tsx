"use client";

import React, { useEffect, useState,  } from 'react';
import NoteForm from '@/components/NoteForm/NoteForm';
import NoteList from '@/components/NoteList/NoteList';
import NoteModal from '@/components/NoteModal/NoteModal';
import SkeletonNoteForm from '@/components/SkeletonForm/SkeletonForm';
import SkeletonNoteList from '@/components/SkeletonNoteList/SkeletonNoteList';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const openNote = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeNote = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Sistema de Notas</h1>
      <div className="w-full max-w-4xl bg-gray-800 text-black p-6 rounded-lg shadow-md mb-6">
        {isLoading ? <SkeletonNoteForm /> : <NoteForm addNote={addNote} />}
      </div>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        {isLoading ? <SkeletonNoteList /> : <NoteList notes={notes} openNote={openNote} deleteNote={deleteNote} />}
      </div>
      <NoteModal note={selectedNote} isOpen={isModalOpen} close={closeNote} />
    </div>
  );
};

export default HomePage;
