'use client';
import styled from 'styled-components';

const handleError = (isFocus: boolean, isError: boolean) => {
  if (isFocus && !isError) {
    return '1.5px solid #1A894B';
  } else if (isFocus && isError) {
    return '1.5px solid #E00000';
  } else if (!isFocus && isError) {
    return '1.5px solid #E00000';
  } else {
    return '';
  }
};

export const LabelContainer = styled.label`
  .label-input {
    display: block;
    margin: 0 0 8px 0;
  }
`;

export const InputContainer = styled.div<{
  $isFocus: boolean;
  $isError: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f7f7f8;
  height: 49px;
  gap: 8px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  outline: ${(props) => handleError(props.$isFocus, props.$isError)};
`;

export const InputComponent = styled.input`
  border: none;
  background-color: inherit;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  font-size: 16px;

  &::placeholder {
    color: #9d9d9d;
    font-weight: 500;
    line-height: 14px;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
`;

export const IconWrapper = styled.button`
  height: 100%;
  padding: 0 0 0 10px;
  position: absolute;
  right: 20px;
  background-color: #f7f7f8;
  border: none;
  cursor: pointer;
`;

export const ErrorMessageContainer = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
