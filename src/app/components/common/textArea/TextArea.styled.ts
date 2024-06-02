import styled from 'styled-components';

export const TextAreaContainer = styled.label`
  .label-text-area {
    display: block;
    margin: 0 0 8px 0;
  }
`;

export const TextAreaComponent = styled.span<{ $isError: boolean }>`
  border: none;
  outline: 1px solid
    ${(props) => (props.$isError ? 'var(--bg-red)' : 'var(--neutral-default)')};
  max-height: 200px;
  min-height: 100px;
  width: 100%;
  padding: 1px 8px;
  border-radius: 12px;
  background-color: var(--neutral-low);
  color: var(--text-primary);
  font-size: 16px;
  resize: both;
  display: block;
  overflow-y: auto;
  &[contenteditable]:empty::before {
    content: 'Placeholder still possible';
    color: gray;
  }
  &::placeholder {
    color: var(--text-tertiary);
    line-height: 20.8px;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'var(--bg-red)' : 'var(--neutral-default)'};
  }
`;

export const ErrorContainer = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
