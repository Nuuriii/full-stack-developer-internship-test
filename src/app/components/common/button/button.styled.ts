import styled from 'styled-components';
import { ButtonProps } from './button';

export const WrapperButton = styled.div`
  .button-component {
    text-decoration: none;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  text-decoration: none;
  padding: ${(props) => props.$padding};
  position: relative;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  @media screen and (max-width: 768px) {
  }

  &:hover {
    ${({ disabled }) => !disabled && 'transform: scale(1.05);'}
  }

  &:hover:active {
    ${({ disabled }) => !disabled && 'transform: scale(1.05) translateY(2px);'}
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    border-width: 2px;
    content: '';
    left: calc(-1 * 6px);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 6px);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:active {
    ${({ disabled }) => !disabled && 'transform: translateY(2px);'}
  }

  &.button--primary {
    color: #ffffff;
    background: #1a894b;
  }

  &.button--secondary {
    color: #ffffff;
    background: #e00000;
  }

  &.button--primary-no-bg {
    color: #1a894b;
    background-color: #1a894b;
    background-color: transparent;
    border: 1px solid #1a894b;
  }

  &.button--secondary-no-bg {
    color: #e00000;
    background-color: #e00000;
    background-color: transparent;
    border: 1px solid #e00000;
  }

  &.button--primary-border-gray {
    color: #1a894b;
    background-color: #cacaca;
    background-color: transparent;
    border: 1px solid #cacaca;
  }

  &.button--secondary-border-gray {
    color: #e00000;
    background-color: #cacaca;
    background-color: transparent;
    border: 1px solid #cacaca;
  }

  &.button--primary-no-border {
    color: #1a894b;
    background-color: transparent;
  }

  &.button--secondary-no-border {
    color: #e00000;
    background-color: transparent;
  }

  &.button--gray {
    color: #808080;
    background-color: transparent;
    box-shadow: none;
  }
  &.button--button-batal {
    color: #e00000;
    background-color: #e00000;
    background-color: transparent;
    border: 1px solid #e00000;
  }
`;
