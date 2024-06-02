'use client';
import { Text } from '@/app/components/common/index';
import { poppins } from '@/app/fonts';
import {
  TextAreaContainer,
  TextAreaComponent,
  ErrorContainer,
} from './TextArea.styled';
import { useRef, useEffect, useState } from 'react';

interface TextAreaProps {
  onChange: (e: string) => void;
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
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(value || '');

  useEffect(() => {
    if (value !== undefined && currentValue !== value) {
      setCurrentValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (textAreaRef.current && textAreaRef.current.innerText !== currentValue) {
      textAreaRef.current.innerText = currentValue;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const handleInput = () => {
    if (textAreaRef.current) {
      const value = textAreaRef.current.innerText;
      setCurrentValue(value);
      onChange(value);
    }
  };
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
        ref={textAreaRef}
        className={poppins.className}
        onInput={handleInput}
        role="textbox"
        contentEditable
      />

      {error ? (
        <ErrorContainer>
          <Text
            htmlTag={'span'}
            type={'paragraph-small'}
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
