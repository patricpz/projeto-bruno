"use client";

import * as Dialog from '@radix-ui/react-dialog';
import { Pencil1Icon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';
import { create, update } from '@/requests/notes';

const NoteModal = ({ note, isOpen, close, onSave }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [editedNote, setEditedNote] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (note) {
          setEditedNote({ title: note.title, content: note.content, date: note.date });
        }
      }, 500); // Ajuste o tempo conforme necessário

      return () => clearTimeout(timer);
    }
  }, [isOpen, note]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({
      ...editedNote,
      [name]: value
    });
  };

  const handleSave = async () => {
    // onSave(editedNote);
    const {id} = note;
    const {title, content} = editedNote;
    // @ts-ignore
    const updatedNote = await update({id, title, content})
    console.log('updatedNote', updatedNote)
    setIsEditing(false); // Retorna ao estado normal após salvar
    close();
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  if (!note) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={close} key={note.id}>
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/4 mt-4"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-xl font-bold text-black">
                {isEditing ? (
                  <input
                    type="text"
                    name="title"
                    value={editedNote.title}
                    onChange={handleInputChange}
                    className="w-full bg-gray-200 rounded p-2 mb-2"
                  />
                ) : (
                  note.title
                )}
              </Dialog.Title>
              <button onClick={toggleEditing} className="text-gray-500 hover:text-gray-700">
                <Pencil1Icon size={24} />
              </button>
            </div>
            <Dialog.Description className="mt-2 text-black">
              {isEditing ? (
                <textarea
                  name="content"
                  value={editedNote.content}
                  onChange={handleInputChange}
                  className="w-full bg-gray-200 rounded p-2 mb-2"
                  rows="4"
                />
              ) : (
                note.content
              )}
            </Dialog.Description>
            {/* <p className="mt-2 text-sm text-gray-500">
              {isEditing ? (
                <input
                  type="text"
                  name="date"
                  value={editedNote.date}
                  onChange={handleInputChange}
                  className="w-full bg-gray-200 rounded p-2"
                />
              ) : (
                note.date
              )}
            </p> */}
            {isEditing && (
              <div className="mt-4 flex justify-end space-x-2">
                <button onClick={close} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                  Cancelar
                </button>
                <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Salvar
                </button>
              </div>
            )}
            {!isEditing && (
              <button onClick={close} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Fechar
              </button>
            )}
          </>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NoteModal;
