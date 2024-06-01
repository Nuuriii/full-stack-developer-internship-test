'use client';
import {
  ListTodoContainer,
  TodoItemWrapper,
  CheckBoxAndTodo,
} from './todoPage.styled';
import { Text, PopOver } from '@/app/components/common';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteTodo from './DeleteTodo';
import EditTodoModal from './EditTodoModal';
import { RootState } from '@/app/lib/reduxToolkit/store';
import { useSelector, useDispatch } from 'react-redux';
import { updateListTodo } from '@/app/lib/reduxToolkit/note/noteSlice';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function ListTodo() {
  const dispatch = useDispatch();
  const todoListGlobalState = useSelector(
    (state: RootState) => state.todoListGlobalState,
  );

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState({
    id: '',
    todo: '',
    completed: false,
  });

  const getData = async () => {
    try {
      const { data: getTodoList } = await axios.get('/api/todo');

      dispatch(updateListTodo(getTodoList));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['kkk']);

  const deleteTask = async (id: string) => {
    const response = await axios.delete(`/api/todo/${id}`);
  };

  const handleEditedTodo = (id: string, title: string, completed: boolean) => {
    setShowEditModal(true);
    setEditedData({ id: id, todo: title, completed: completed });
  };

  return (
    <>
      {showEditModal && (
        <EditTodoModal
          id={editedData.id}
          title={editedData.todo}
          completed={editedData.completed}
          closeModal={() => setShowEditModal(false)}
          showEditModal={showEditModal}
        />
      )}
      <ListTodoContainer>
        {todoListGlobalState.todoList.length !== 0 ? (
          <>
            {todoListGlobalState.todoList.map((item: any, index) => (
              <TodoItemWrapper key={index}>
                <CheckBoxAndTodo>
                  <input type="checkbox" />
                  <p>{item.title}</p>
                </CheckBoxAndTodo>
                <PopOver>
                  <button
                    onClick={() =>
                      handleEditedTodo(item.id, item.title, item.completed)
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteTask(item.id)}>hapus</button>
                </PopOver>
              </TodoItemWrapper>
            ))}
          </>
        ) : (
          <Text
            htmlTag={'p'}
            type="paragraph-regular"
            className="empty-todo-text"
          >
            Empty Todo. . .
          </Text>
        )}
      </ListTodoContainer>
    </>
  );
}
