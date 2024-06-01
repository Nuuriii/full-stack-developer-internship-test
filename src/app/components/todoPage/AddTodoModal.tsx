'use client';
import { Modal, TextArea, Text, Button } from '../common';
import {
  ButtonContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from './todoPage.styled';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/app/lib/reduxToolkit/note/noteSlice';
import { useMutation } from '@tanstack/react-query';

export default function AddTodoModal() {
  const dispatch = useDispatch();
  const [show, setIsShow] = useState(false);
  const [todo, setTodo] = useState('');

  const handleModal = () => {
    setIsShow(!show);
  };

  const mutation = useMutation({
    mutationFn: async (newTodo: any) => {
      try {
        const { data: response } = await axios.post('/api/todo', newTodo);
        dispatch(addTodo(response));
        setIsShow(false);
        setTodo('');
        return response;
      } catch (error) {
        return error;
      }
    },
  });

  return (
    <>
      <ButtonContainer>
        <button onClick={handleModal} className="btn-add">
          +
        </button>
      </ButtonContainer>
      <Modal isClose={show}>
        <ModalHeader>
          <Text htmlTag={'h1'} type={'heading-large'}>
            Add New Todo
          </Text>
          <button onClick={handleModal}>X</button>
        </ModalHeader>

        <ModalContent>
          <TextArea
            onChange={(e) => setTodo(e.target.value)}
            placeHolder={''}
            labelText={''}
            value={todo}
          />
        </ModalContent>

        <ModalFooter>
          <Button type="primary" onClick={() => setIsShow(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({ title: todo });
            }}
          >
            {mutation.isPending ? 'Loading' : 'Add'}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
