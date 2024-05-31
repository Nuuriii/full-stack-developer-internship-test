import { inter, raleway } from '@/app/fonts';
import { ElementType } from 'react';
import { TextComponent } from './text.styled';

interface TextProps {
  htmlTag: ElementType;
  className?: string;
  children: React.ReactNode;
  type:
    | 'headline-small'
    | 'headline-regular'
    | 'navigation-active'
    | 'navigation-default'
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
    | 'heading-xlarge'
    | 'body-caption'
    | 'body-xsmall'
    | 'body-small'
    | 'body-regular'
    | 'body-medium';
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

  switch (type) {
    case 'headline-small':
    case 'headline-regular':
    case 'navigation-active':
    case 'navigation-default':
      selectedFamily = raleway.className;
      break;
    default:
      selectedFamily = inter.className;
      break;
  }

  return (
    <TextComponent
      as={htmlTag}
      className={`${selectedFamily} ${className}`}
      $color={color}
      $type={type}
    >
      {children}
    </TextComponent>
  );
}
