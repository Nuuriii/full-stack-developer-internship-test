'use client';
import { Modal, Text, TextArea, Button } from '../common';
import { ModalHeader, ModalContent, ModalFooter } from './todoPage.styled';
import { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { editTodoTitle } from '@/app/lib/reduxToolkit/todo/todoSlice';
import { X } from 'lucide-react';

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
  const [showEditedModal, setShowEditedModal] = useState(showEditModal);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      if (newTodo === '') {
        setError(true);
        return;
      }

      try {
        const { data: response } = await axios.put(`/api/todo/${id}`, {
          title: newTodo,
          completed: completed,
        });
        dispatch(editTodoTitle({ id: id, title: newTodo }));
        setShowEditedModal(false);
        closeModal();

        return response;
      } catch (error) {
        return error;
      }
    },
  });

  return (
    <Modal isClose={showEditedModal} onClose={() => setShowEditedModal(false)}>
      <ModalHeader>
        <Text htmlTag={'h1'} type={'heading-large'}>
          Edit Todo
        </Text>
        <Button
          type="no-bg"
          className="close-btn"
          onClick={() => {
            setShowEditedModal(false);
            closeModal();
          }}
        >
          <X size={18} />
        </Button>
      </ModalHeader>

      <ModalContent>
        <TextArea
          onChange={(e) => setNewTodo(e)}
          placeHolder={''}
          labelText={''}
          value={newTodo}
          error={error}
          errorMessage="Input is still empty"
        />
      </ModalContent>

      <ModalFooter>
        <Button
          type="primary"
          onClick={() => {
            setShowEditedModal(false);
            closeModal();
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={() => {
            mutation.mutate();
          }}
        >
          {mutation.isPending ? 'Updated. . .' : 'Update'}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
