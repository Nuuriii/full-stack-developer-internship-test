'use client';
import React from 'react';
import { ButtonComponent } from './Button.styled';

export interface ButtonProps {
  type: 'primary' | 'submit' | 'delete' | 'cancel';
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  type = 'primary',
  children,
  disabled = false,
  className = '',
  onClick = () => '',
}: ButtonProps) {
  return (
    <ButtonComponent
      $type={type}
      className={`${className} ${type}`}
      $disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
}
