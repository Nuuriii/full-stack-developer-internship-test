'use client';
import { useState } from 'react';
import Image from 'next/image';
import { poppins } from '@/app/fonts';
import { Text } from '@/app/components/common/index';
import {
  LabelContainer,
  InputContainer,
  InputComponent,
  ErrorMessageContainer,
} from './input.styled';

interface InputProps {
  type: 'with-icon' | 'no-icon' | 'password' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  labelText?: string;
  value?: string;
  icon?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function Input({
  type,
  onChange,
  placeHolder,
  labelText = '',
  value,
  icon = '',
  className,
  error = false,
  errorMessage,
}: InputProps) {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const SelectedInputType = () => {
    switch (type) {
      case 'number':
        return (
          <LabelContainer className={className}>
            {labelText === '' ? (
              ''
            ) : (
              <Text
                htmlTag={'span'}
                type={'heading-regular'}
                color={'var(--text-primary)'}
                className="label-input"
              >
                {labelText}
              </Text>
            )}
            <InputContainer
              $isError={error}
              $isFocus={focus}
              className={poppins.className}
            >
              <InputComponent
                type="number"
                value={value}
                onFocus={handleFocus}
                onChange={onChange}
                onBlur={handleBlur}
                placeholder={placeHolder}
              />
            </InputContainer>

            {error ? (
              <ErrorMessageContainer>
                <Text
                  htmlTag={'span'}
                  type={'paragraph-small'}
                  color={'var(--red-default)'}
                >
                  {errorMessage}
                </Text>
              </ErrorMessageContainer>
            ) : (
              ''
            )}
          </LabelContainer>
        );
      case 'password':
        return (
          <LabelContainer className={className}>
            {labelText === '' ? (
              ''
            ) : (
              <Text
                htmlTag={'span'}
                type={'heading-regular'}
                color={'var(--text-primary)'}
                className="label-input"
              >
                {labelText}
              </Text>
            )}
            <InputContainer
              $isError={error}
              $isFocus={focus}
              className={poppins.className}
            >
              <InputComponent
                type={showPassword ? 'text' : 'password'}
                value={value}
                onFocus={handleFocus}
                onChange={onChange}
                onBlur={handleBlur}
                placeholder={placeHolder}
              />

              {/* <IconWrapper onClick={toggleShowPassword}>
                {showPassword ? (
                  <Image src={ShowIcon} alt="" />
                ) : (
                  <Image src={HiddenIcon} alt="" />
                )}
              </IconWrapper> */}
            </InputContainer>

            {error ? (
              <ErrorMessageContainer>
                <Text
                  htmlTag={'span'}
                  type={'paragraph-small'}
                  color={'var(--red-default)'}
                >
                  {errorMessage}
                </Text>
              </ErrorMessageContainer>
            ) : (
              ''
            )}
          </LabelContainer>
        );

      default:
        return (
          <LabelContainer className={className}>
            {labelText === '' ? (
              ''
            ) : (
              <Text
                htmlTag={'span'}
                type={'heading-regular'}
                color={'var(--text-primary)'}
                className="label-input"
              >
                {labelText}
              </Text>
            )}
            <InputContainer
              $isError={error}
              $isFocus={focus}
              className={poppins.className}
            >
              {type === 'no-icon' ? (
                ''
              ) : (
                <Image src={icon} alt="" className="icon" />
              )}

              <InputComponent
                value={value}
                onFocus={handleFocus}
                onChange={onChange}
                onBlur={handleBlur}
                placeholder={placeHolder}
              />
            </InputContainer>

            {error ? (
              <ErrorMessageContainer>
                <Text
                  htmlTag={'span'}
                  type={'paragraph-small'}
                  color={'var(--red-default)'}
                >
                  {errorMessage}
                </Text>
              </ErrorMessageContainer>
            ) : (
              ''
            )}
          </LabelContainer>
        );
    }
  };

  return <>{SelectedInputType()}</>;
}
