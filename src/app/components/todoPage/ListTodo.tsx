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

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function ListTodo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [closePopOver, setClosePopOver] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState({
    id: '',
    todo: '',
    completed: false,
  });

  useEffect(() => {
    axios.get('/api/todo').then((response) => setTasks(response.data));
  }, []);

  const deleteTask = async (id: string) => {
    const response = await axios.delete(`/api/todo/${id}`);
  };

  const handleEditedTodo = (id: string, title: string, completed: boolean) => {
    setShowEditModal(true);
    setEditedData({ id: id, todo: title, completed: completed });
  };

  console.log(editedData);
  console.log(showEditModal);
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
        {tasks.length !== 0 ? (
          <>
            {tasks.map((item: any, index) => (
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
