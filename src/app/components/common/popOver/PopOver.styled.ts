import styled from 'styled-components';

export const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopoverContent = styled.div<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 100%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;
`;

export const TriggerButton = styled.button`
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: #005bb5;
  }
`;
