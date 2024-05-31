'use client';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { StyledButton, WrapperButton } from './button.styled';

export interface ButtonProps {
  /**
   * Enter the button type "primary" or "secondary"
   */
  type:
    | 'primary'
    | 'secondary'
    | 'primary-no-bg'
    | 'secondary-no-bg'
    | 'primary-border-gray'
    | 'secondary-border-gray'
    | 'primary-no-border'
    | 'secondary-no-border'
    | 'gray'
    | 'button-batal';
  /**
   * Enter content button
   */
  children: React.ReactNode;
  /**
   * Insert padding according to the existing design
   * `"top right bottom left"`
   */
  $padding?: string;
  /**
   * Leading to where
   */
  href?: string;
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
  /**
   * Enter className
   */
  className?: string;
  /**
   * Action
   */
  onClick?: () => void;
}

export default function Button({
  type = 'primary',
  children,
  $padding = '12px, 20px, 12px, 20px',
  href,
  style,
  className,
  ...props
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${type}`;
  return (
    <WrapperButton>
      <Link href={href || ''} className="button-component">
        <StyledButton
          data-testid={`button--${type}`}
          $padding={$padding}
          type={type}
          className={[className, mode].join(' ')}
          disabled={isDisabled}
          {...props}
        >
          {children}
        </StyledButton>
      </Link>
    </WrapperButton>
  );
}
