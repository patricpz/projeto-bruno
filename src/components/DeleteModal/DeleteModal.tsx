import React from 'react';

const DeleteModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-md p-6 shadow-lg">
        <h2 className="text-xl text-black font-bold mb-4">Confirmar Exclusão</h2>
        <p className="mb-4 text-black">Tem certeza de que deseja deletar esta nota?</p>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onClose} 
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
