import { useState } from 'react';
import { Modal, TextArea, Text, Button } from '../common';
import {
  ButtonContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from './todoPage.styled';
import axios from 'axios';

interface DeleteTodoModalProps {
  id: string;
}

export default function DeleteTodo({ id }: DeleteTodoModalProps) {
  const [showModal, setShowModal] = useState(false);
  const deleteTask = async () => {
    const response = await axios.delete(`/api/todo/${id}`);
  };

  return (
    <>
      <ButtonContainer>
        <button onClick={() => setShowModal(!showModal)} className="btn-add">
          Hapus
        </button>
      </ButtonContainer>
      <Modal isClose={showModal}>
        <ModalHeader>
          <Text htmlTag={'h1'} type={'heading-large'}>
            Add New Todo
          </Text>
          <button onClick={() => setShowModal(false)}>X</button>
        </ModalHeader>

        <ModalContent>
          <p>Yakin mau hapus</p>
        </ModalContent>

        <ModalFooter>
          <Button type="primary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={deleteTask}>
            Hapus
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
