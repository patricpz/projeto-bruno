"use client";

import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

const NoteModal = ({ note, isOpen, close }) => {
  if (!note) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={close}>
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-black">{note.title}</Dialog.Title>
        <Dialog.Description className="mt-2 text-black">{note.description}</Dialog.Description>
        <p className="mt-2 text-sm text-gray-500">{note.date}</p>
        <button onClick={close} className="mt-4 bg-red-600  text-white px-4 py-2 rounded-md hover:bg-red-700">
          Fechar
        </button>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NoteModal;
