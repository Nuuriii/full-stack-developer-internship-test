'use client';
import { Modal, Text, TextArea, Button } from '../common';
import { ModalHeader, ModalContent, ModalFooter } from './todoPage.styled';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface EditTodoProps {
  id: string;
  title: string;
  completed: boolean;
  showEditModal: boolean;
  closeModal: () => void;
}

export default function EditTodoModal({
  id,
  title,
  completed,
  showEditModal,
  closeModal,
}: EditTodoProps) {
  const [newTodo, setNewTodo] = useState(title);
  const [showModal, setShowModal] = useState(showEditModal);

  console.log(showEditModal, showModal);
  const updateTask = async () => {
    const response = await axios.put(`/api/todo`, {
      id: id,
      title: newTodo,
      completed: completed,
    });
  };

  return (
    <Modal isClose={showModal}>
      <ModalHeader>
        <Text htmlTag={'h1'} type={'heading-large'}>
          Edit Todo
        </Text>
        <button
          onClick={() => {
            setShowModal(false);
            closeModal();
          }}
        >
          X
        </button>
      </ModalHeader>

      <ModalContent>
        <TextArea
          onChange={(e) => setNewTodo(e.target.value)}
          placeHolder={''}
          labelText={''}
          value={newTodo}
        />
      </ModalContent>

      <ModalFooter>
        <Button
          type="primary"
          onClick={() => {
            setShowModal(false);
            closeModal();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" onClick={updateTask}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
}
