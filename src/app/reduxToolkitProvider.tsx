'use client';
import { store } from '@/app/lib/reduxToolkit/store';
import { Provider } from 'react-redux';

interface ProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
