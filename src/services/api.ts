"use server";

import { env } from "@/env";
import { getServerAuthSession } from "@/lib/auth";
import axios from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import { signIn, signOut } from "next-auth/react";
import { cookies } from "next/headers";

function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwt.decode(token) as JwtPayload;
    const expiration = decoded.exp;
    const currentTime = Math.floor(Date.now() / 1000); // Tempo atual em segundos

    if (expiration && expiration < currentTime) {
      return true; // Token está expirado
    }
    return false; // Token ainda é válido
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return true; // Considere o token expirado se houver erro
  }
}

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const session = await getServerAuthSession();
  console.log("session", session);
  if (session?.user?.accessToken) {
    const tokenExpired = isTokenExpired(session.user.accessToken);
    console.log("tokenExpired", tokenExpired);
    if (tokenExpired) {
      // Chama a função de signOut e redireciona para a página de login
      // signOut({
      //   callbackUrl: '/auth/signin' // A URL para redirecionar após o signOut
      // })

      console.log("singout");

      ("use server");
      cookies().delete("next-auth.session-token");

      ("use server");
      cookies().delete("next-auth.csrf-token");
    }
  }

  config.headers.Authorization = `Bearer ${session?.user?.accessToken}`;
  return config;
});
