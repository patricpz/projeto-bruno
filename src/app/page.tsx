"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Home() {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");






  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#6a0dad', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontSize: '1.5rem' }}>Sistema de Notas</div>
        <Button
          onClick={() => window.location.href = '/app'}
          style={{ backgroundColor: '#fff', color: '#6a0dad' }}
        >
          Login
        </Button>
      </header>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
        <h1 style={{ color: '#6a0dad', fontSize: '3rem' }}>
          Bem-vindo ao Sistema de Notas
        </h1>
        <p style={{ color: '#fff', textAlign: 'center', maxWidth: '600px', fontSize: '1.2rem' }}>
          Nosso sistema de notas é projetado para ajudá-lo a organizar suas ideias, tarefas e informações de maneira eficiente e intuitiva. Com nossa plataforma, você pode criar, editar e gerenciar suas notas de forma fácil e rápida, garantindo que você nunca perca um pensamento importante.
        </p>
        <Button
          style={{ backgroundColor: '#6a0dad', color: '#fff', marginTop: '20px', padding: '10px 20px', fontSize: '1.2rem' }}
          onClick={() => window.location.href = '/app'}
        >
          Acessar Sistema de Notas
        </Button>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .menu-link {
          color: #fff;
          margin: 0 10px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .menu-link:hover {
          color: #ffeb3b; /* Cor amarela ao passar o mouse */
        }
      `}</style>
    </main>
  );
}
