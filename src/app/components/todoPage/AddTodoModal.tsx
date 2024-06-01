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

export default function AddTodoModal() {
  const [show, setIsShow] = useState(false);
  const [todo, setTodo] = useState('');

  const handleModal = () => {
    setIsShow(!show);
  };

  const addTask = async () => {
    if (todo) {
      const response = await axios.post('/api/todo', { title: todo });

      setTodo('');
    }
  };

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
          <Button type="primary">Cancel</Button>
          <Button type="submit" onClick={addTask}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}