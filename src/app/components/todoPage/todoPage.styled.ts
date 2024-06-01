'use client';
import styled from 'styled-components';

export const TodoContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  align-items: center;
`;

export const TodoWrapper = styled.div`
  min-height: 300px;
  max-height: 600px;
  width: 390px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 0px 40px 0;
  & > .title-app {
    padding: 20px 0;
    width: 100%;
    text-align: center;
    border-bottom: 1.5px solid gray;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 10px 10px 0 10px;
  & > .btn-add {
    padding: 5px 10px;
    height: auto;
    color: var(--text-white);
  }
`;

export const ListTodoContainer = styled.div`
  display: flex;
  padding: 0px 10px 90px 10px;
  margin: 20px 0 0 0;
  flex-direction: column;
  gap: 15px;
  max-height: 550px;
  overflow-y: auto;

  & > .empty-todo-text {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TodoItemWrapper = styled.div<{ $ischecked: boolean }>`
  background-color: ${(props) =>
    props.$ischecked ? '#2b577a' : 'var(--bg-black-small)'};
  color: white;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const CheckBoxAndTodo = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  align-items: start;
  word-break: break-all;
  gap: 5px;
`;

export const MenuAction = styled.div`
  display: flex;
  gap: 5px;

  & > .edit-todo {
    padding: 5px;
    border-radius: 7px;
  }

  & > .delete-todo {
    padding: 5px;
    border-radius: 7px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .close-btn {
    padding: 0;
    background-color: transparent;
    color: var(--text-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 100%;
    width: 30px;
    &:hover {
      background-color: var(--neutral-medium);
    }
  }
`;

export const ModalContent = styled.div`
  margin: 15px 0 20px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;
