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

  &.primary {
    color: #ffffff;
    background: black;
  }

  &.submit {
    color: #ffffff;
    background: green;
  }

  &.delete {
    color: #ffffff;
    background-color: red;
  }
`;
