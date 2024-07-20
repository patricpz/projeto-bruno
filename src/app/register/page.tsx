"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  name: z.string()
});

const RegisterPage = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    // Simula o processo de registro
    try {
      // Aqui você faria a lógica real de registro do usuário.
      // Simulação de sucesso
      setRegistrationSuccess(true);
      setTimeout(() => {
        router.push('/teste'); // Substitua '/teste' pelo caminho para o qual deseja redirecionar
      }, 2000); // Atraso de 2 segundos para permitir que o usuário veja a mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-600">
      <div className="w-full max-w-md p-9 space-y-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Registre-se</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu Nome" className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu email" className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Digite sua senha" className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Registrar
            </Button>
          </form>
        </Form>
        {registrationSuccess && (
          <p className="text-center text-green-600 mt-4">Conta criada com sucesso! Redirecionando...</p>
        )}
        <p className="text-center text-gray-800">
          Já possui uma conta? <Link href="/login" className="text-indigo-600 hover:text-indigo-800">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
