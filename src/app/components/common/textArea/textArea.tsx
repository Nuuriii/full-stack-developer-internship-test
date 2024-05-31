'use client';
import { Text } from '@/app/components/common/index';
import { inter } from '@/app/fonts';
import Image from 'next/image';
import {
  TextAreaContainer,
  TextAreaComponent,
  ErrorContainer,
} from './textArea.styled';

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeHolder: string;
  labelText: string;
  value?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function TextArea({
  onChange,
  placeHolder,
  labelText,
  value,
  className,
  error = false,
  errorMessage,
}: TextAreaProps) {
  return (
    <TextAreaContainer className={className}>
      <Text
        htmlTag={'span'}
        type={'heading-regular'}
        color={'var(--text-primary)'}
        className="label-text-area"
      >
        {labelText}
      </Text>
      <TextAreaComponent
        $isError={error}
        className={inter.className}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />

      {error ? (
        <ErrorContainer>
          <Text
            htmlTag={'span'}
            type={'body-small'}
            color={'var(--red-default)'}
          >
            {errorMessage}
          </Text>
        </ErrorContainer>
      ) : (
        ''
      )}
    </TextAreaContainer>
  );
}
