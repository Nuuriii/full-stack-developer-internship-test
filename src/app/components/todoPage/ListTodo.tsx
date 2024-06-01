'use client';
import {
  ListTodoContainer,
  TodoItemWrapper,
  CheckBoxAndTodo,
} from './todoPage.styled';
import { Text, PopOver } from '@/app/components/common';
import { useState } from 'react';
import axios from 'axios';
import EditTodoModal from './EditTodoModal';
import DeleteTodoModal from './DeleteTodo';
import { RootState } from '@/app/lib/reduxToolkit/store';
import { useSelector, useDispatch } from 'react-redux';
import { updateListTodo } from '@/app/lib/reduxToolkit/note/noteSlice';
import { useQuery } from '@tanstack/react-query';

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedId, setDeletedId] = useState('');

  const { isFetching } = useQuery({
    queryKey: [todoListGlobalState.todoList],
    queryFn: async () => {
      try {
        const { data: getTodoList } = await axios.get('/api/todo');

        dispatch(updateListTodo(getTodoList));
        return getTodoList;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const deleteTask = async (id: string) => {
    const response = await axios.delete(`/api/todo/${id}`);
  };

  const handleEditedTodo = (id: string, title: string, completed: boolean) => {
    setShowEditModal(true);
    setEditedData({ id: id, todo: title, completed: completed });
  };

  const handleDeleteTodo = (id: string) => {
    setShowDeleteModal(true);
    setDeletedId(id);
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
      {showDeleteModal && (
        <DeleteTodoModal
          id={deletedId}
          closeModal={() => setShowDeleteModal(false)}
          showDeleteModal={showDeleteModal}
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
                  <button onClick={() => handleDeleteTodo(item.id)}>
                    hapus
                  </button>
                </PopOver>
              </TodoItemWrapper>
            ))}
          </>
        ) : isFetching === true ? (
          <Text
            htmlTag={'p'}
            type="paragraph-regular"
            className="empty-todo-text"
          >
            Loading. . .
          </Text>
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
