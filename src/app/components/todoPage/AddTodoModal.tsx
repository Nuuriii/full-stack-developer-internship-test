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
import { addTodo } from '@/app/lib/reduxToolkit/todo/todoSlice';
import { useMutation } from '@tanstack/react-query';
import { Plus, X } from 'lucide-react';

export default function AddTodoModal() {
  const dispatch = useDispatch();
  const [show, setIsShow] = useState(false);
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);

  const handleModal = () => {
    setIsShow(!show);
    setError(false);
  };

  const mutation = useMutation({
    mutationFn: async (newTodo: { title: string }) => {
      if (newTodo.title === '') {
        setError(true);
        return;
      }

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
        <Button type="primary" onClick={handleModal} className="btn-add">
          <Plus size={20} />
        </Button>
      </ButtonContainer>
      <Modal isClose={show} onClose={() => setIsShow(false)}>
        <ModalHeader>
          <Text htmlTag={'h1'} type={'heading-large'}>
            Add New Todo
          </Text>
          <Button type="no-bg" onClick={handleModal} className="close-btn">
            <X size={18} />
          </Button>
        </ModalHeader>

        <ModalContent>
          <TextArea
            onChange={(e) => setTodo(e)}
            placeHolder={''}
            labelText={''}
            value={todo}
            error={error}
            errorMessage="Tolong isi input terlebih dahulu"
          />
        </ModalContent>

        <ModalFooter>
          <Button
            type="primary"
            onClick={() => {
              setIsShow(false);
              setError(false);
            }}
          >
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
