"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter
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
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const router = useRouter(); // Inicializa o hook useRouter

  const onSubmit = (data) => {
    console.log(data);
    // Lógica de login aqui

    // Após o login bem-sucedido, redirecione para outra página
    router.push('/teste'); // Substitua '/pagina-destino' pelo caminho para o qual deseja redirecionar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-600">
      <div className="w-full max-w-md p-9 space-y-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              Entrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
