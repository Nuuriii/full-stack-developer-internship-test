import React from 'react';
import { Padding } from './paddingContainer.styled';

interface PaddingProps {
  children: React.ReactNode;
}

export default function PaddingContainer({ children }: PaddingProps) {
  return <Padding>{children}</Padding>;
}
