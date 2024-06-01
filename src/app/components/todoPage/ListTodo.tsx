'use client';
import {
  ListTodoContainer,
  TodoItemWrapper,
  CheckBoxAndTodo,
  MenuAction,
} from './todoPage.styled';
import { Text, PopOver, Button } from '@/app/components/common';
import { useState } from 'react';
import axios from 'axios';
import EditTodoModal from './EditTodoModal';
import DeleteTodoModal from './DeleteTodo';
import { RootState } from '@/app/lib/reduxToolkit/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateListTodo,
  editTodoCompleted,
} from '@/app/lib/reduxToolkit/todo/todoSlice';
import { useQuery, useMutation } from '@tanstack/react-query';
import { PencilLine, Trash2 } from 'lucide-react';

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

  const handleEditedTodo = (id: string, title: string, completed: boolean) => {
    setShowEditModal(true);
    setEditedData({ id: id, todo: title, completed: completed });
  };

  const handleDeleteTodo = (id: string) => {
    setShowDeleteModal(true);
    setDeletedId(id);
  };

  const mutation = useMutation({
    mutationFn: async (updateComplete: {
      id: string;
      title: string;
      completed: boolean;
    }) => {
      try {
        const { data: response } = await axios.put(
          `/api/todo/${updateComplete.id}`,
          {
            title: updateComplete.title,
            completed: updateComplete.completed,
          },
        );
        dispatch(
          editTodoCompleted({
            id: updateComplete.id,
            completed: updateComplete.completed,
          }),
        );

        return response;
      } catch (error) {
        return error;
      }
    },
  });

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
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(e) => {
                      mutation.mutate({
                        id: item.id,
                        title: item.title,
                        completed: !item.completed,
                      });
                    }}
                  />
                  <Text htmlTag={'p'} type="paragraph-small">
                    {item.title}
                  </Text>
                </CheckBoxAndTodo>
                <PopOver>
                  <MenuAction>
                    <Button
                      type="submit"
                      className="edit-todo"
                      onClick={() =>
                        handleEditedTodo(item.id, item.title, item.completed)
                      }
                    >
                      <PencilLine size={18} />
                    </Button>
                    <Button
                      type="delete"
                      className="delete-todo"
                      onClick={() => handleDeleteTodo(item.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </MenuAction>
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
