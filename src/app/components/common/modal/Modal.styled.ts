import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 22.200000762939453px 0px #0000001a;
  max-height: 400px;
  z-index: 1000;
  border-radius: 10px;
  padding: 25px;
  overflow-y: auto;
  //overflow-x: hidden;
`;
