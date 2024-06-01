'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  PopoverContainer,
  TriggerButton,
  PopoverContent,
} from './PopOver.styled';
import { EllipsisVertical } from 'lucide-react';

interface PopOverProps {
  children: React.ReactNode;
}

export default function PopOver({ children }: PopOverProps) {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <PopoverContainer ref={popoverRef}>
      <TriggerButton onClick={() => setIsVisible(!isVisible)}>
        <EllipsisVertical size={18} />
      </TriggerButton>
      <PopoverContent $visible={isVisible}>{children}</PopoverContent>
    </PopoverContainer>
  );
}
