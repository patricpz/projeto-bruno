"use client";

import React, { useState } from 'react';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; // Importa o componente LoadingSpinner

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para gerenciar o carregamento

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Ativa o estado de carregamento

    // Simula um atraso para o carregamento
    await new Promise(resolve => setTimeout(resolve, 500));

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
    });

    setIsSubmitting(false); // Desativa o estado de carregamento
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-md bg-gray-800">
      <div>
        <label className="block text-xl font-medium text-white">Título</label>
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
      <button 
        type="submit" 
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light"
        disabled={isSubmitting} // Desativa o botão durante o carregamento
      >
        {isSubmitting ? 'Salvando...' : 'Salvar'} {/* Exibe texto condicional no botão */}
      </button>

      
      <Toaster/>
    </form>
  );
};

export default NoteForm;
