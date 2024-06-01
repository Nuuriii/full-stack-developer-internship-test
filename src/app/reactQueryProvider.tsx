'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
