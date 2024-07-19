"use client";

import React, { useState } from 'react';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      description,
      date: new Date().toLocaleString()
    });
    setTitle('');
    setDescription('');
    toast({
        title: "Tarefa Adicionada com sucesso",
        description: title,
      })  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-md bg-gray-800">
      <div>
        <label className="block text-xl font-medium text-white ">Título</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          className="mt-1 block w-full px-3 py-2 rounded-md bg-white focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label className="block text-xl font-medium text-white">Descrição</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="mt-1 block w-full px-3 py-2 rounded-md bg-white focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light">
        Salvar
      </button>

      <Toaster/>
    </form>
  );
};

export default NoteForm;
