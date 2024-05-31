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
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    height: auto;
    font-size: 20px;
    background-color: black;
    color: white;
  }
`;

export const ListTodoContainer = styled.div`
  display: flex;
  padding: 0px 10px 90px 10px;
  margin: 20px 0 0 0;
  flex-direction: column;

  gap: 15px;
  max-height: 550px;
  overflow-y: scroll;

  & > .empty-todo-text {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TodoItemWrapper = styled.div`
  background-color: black;
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
  gap: 5px;
`;
