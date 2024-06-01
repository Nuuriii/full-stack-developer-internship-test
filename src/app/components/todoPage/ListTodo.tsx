'use client';
import {
  ListTodoContainer,
  TodoItemWrapper,
  CheckBoxAndTodo,
} from './todoPage.styled';
import { Text, PopOver } from '@/app/components/common';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { EllipsisVertical } from 'lucide-react';
import DeleteTodo from './DeleteTodo';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function ListTodo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get('/api/todo').then((response) => setTasks(response.data));
  }, []);

  const deleteTask = async (id: string) => {
    const response = await axios.delete(`/api/todo/${id}`);
  };

  return (
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
                <button>Edit</button>
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
  );
}
