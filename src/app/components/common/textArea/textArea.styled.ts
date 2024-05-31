import styled from 'styled-components';

export const TextAreaContainer = styled.label`
  .label-text-area {
    display: block;
    margin: 0 0 8px 0;
  }
`;

export const TextAreaComponent = styled.textarea<{ $isError: boolean }>`
  border: none;
  outline: ${(props) =>
    props.$isError ? '1.5px solid var(--red-default)' : 'none'};
  height: max-content;
  max-height: 100px;
  min-height: 60px;
  width: 100%;
  padding: 14px 20px;
  border-radius: 12px;
  background-color: var(--neutral-low);
  color: var(--text-primary);
  font-size: 16px;
  resize: none;

  &::placeholder {
    color: var(--text-tertiary);
    line-height: 20.8px;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    outline: ${(props) =>
      props.$isError
        ? '1.5px solid var(--red-default)'
        : '1.5px solid var(--green-default)'};
  }
`;

export const ErrorContainer = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
