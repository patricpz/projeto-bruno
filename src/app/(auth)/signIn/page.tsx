'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import {
  FormContainer,
  FormContent,
  FormHeader,
  FormInputs,
  FormTitle
} from '@/components/form/FormPage';
import { useState } from 'react';
import './styles.css';

const formSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres')
});

type FormValues = z.infer<typeof formSchema>;

export default function Page() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(formSchema)
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (response?.ok) {
      router.push('/app');
      return;
    }

    if (response?.status === 500) {
      toast({
        title: 'Erro interno',
        description: 'Ocorreu um erro interno, tente novamente mais tarde'
      });
    } else {
      toast({
        title: 'Erro',
        description: 'E-mail ou senha inválidos',
        variant: 'destructive'
      });
    }
  });

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
      <FormContainer style={{ width: '100%', maxWidth: '500px', padding: '20px', borderRadius: '8px' ,}}>
        <Form {...form}>
          <FormHeader style={{ color: '#fff' }}>
            <FormTitle style={{ color: '#6a0dad' }}>Entrar</FormTitle>
            <FormDescription style={{ color: '#fff' }}>
              Bem vindo! Por favor, insira seu e-mail e senha para continuar.
            </FormDescription>
          </FormHeader>

          <form onSubmit={handleSubmit} style={{ width: '100%', backgroundColor: '#000'   }}>
            <FormContent>
              <FormInputs>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email" style={{ color: '#fff' }}>Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="mail@example.com"
                          {...field}
                          style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #6a0dad' }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password" style={{ color: '#fff' }}>Senha</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="4H8I2Y#5"
                          {...field}
                          style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #6a0dad' }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputs>
              <Button
                className="w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
                style={{ backgroundColor: '#6a0dad', color: '#fff', marginTop: '20px', padding: '10px 20px', fontSize: '1.2rem' }}
              >
                {isLoading ? 'Verificando...' : 'Entrar'}
              </Button>
            </FormContent>
          </form>
        </Form>
      </FormContainer>
    </div>
  );
}
