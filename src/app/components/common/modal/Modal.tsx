'use client';
import { ModalContainer, ModalContent } from './Modal.styled';
import React, { useRef, useEffect } from 'react';

interface ModalProps {
  isClose: boolean;
  children: React.ReactNode;
  classname?: string;
  onClose?: () => void;
}

export default function Modal({
  isClose,
  children,
  classname = '',
  onClose,
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
