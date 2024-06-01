import styled from 'styled-components';

export const ButtonComponent = styled.button<{
  $type: string;
  $disabled?: boolean;
}>`
  border: 0;
  border-radius: 9px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  padding: 10px 15px;
  height: max-content;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    ${({ $disabled }) => $disabled && 'transform: scale(1.05);'}
  }

  &:active {
    transform: scale(0.96);
  }

  &.primary {
    color: var(--text-white);
    background: var(--bg-black);

    &:hover {
      background-color: var(--bg-black-medium);
    }
  }

  &.no-bg {
    color: var(--text-primary);
    background: transparent;
  }

  &.submit {
    color: var(--text-white);
    background-color: var(--bg-blue);

    &:hover {
      background-color: var(--bg-blue-medium);
    }
  }

  &.delete {
    color: var(--text-white);
    background-color: var(--bg-red);

    &:hover {
      background-color: var(--bg-red-medium);
    }
  }
`;
