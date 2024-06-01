'use client';
import { poppins } from '@/app/fonts';
import { ElementType } from 'react';
import { TextComponent } from './text.styled';

interface TextProps {
  htmlTag: ElementType;
  className?: string;
  children: React.ReactNode;
  type:
    | 'paragraph-xsmall'
    | 'paragraph-small'
    | 'paragraph-regular'
    | 'paragraph-text-editor'
    | 'paragraph-medium'
    | 'heading-xsmall'
    | 'heading-small'
    | 'heading-regular'
    | 'heading-medium'
    | 'heading-large'
    | 'heading-xlarge';
  color?: string;
}

export default function Text({
  className,
  htmlTag,
  children,
  type,
  color,
}: TextProps) {
  let selectedFamily;

  // switch (type) {
  //   case 'headline-small':
  //   case 'headline-regular':
  //   case 'navigation-active':
  //   case 'navigation-default':
  //     selectedFamily = raleway.className;
  //     break;
  //   default:
  //     selectedFamily = inter.className;
  //     break;
  // }

  return (
    <TextComponent
      as={htmlTag}
      className={`${poppins.className} ${className}`}
      $color={color}
      $type={type}
    >
      {children}
    </TextComponent>
  );
}
