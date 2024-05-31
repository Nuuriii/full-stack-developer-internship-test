'use client';
import { ModalContainer, ModalContent } from './Modal.styled';
import React from 'react';

interface ModalProps {
  isClose: boolean;
  children: React.ReactNode;
  classname?: string;
}

export default function Modal({
  isClose,
  children,
  classname = '',
}: ModalProps) {
  if (!isClose) {
    return null;
  }

  return (
    <ModalContainer className={`${classname}`}>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
