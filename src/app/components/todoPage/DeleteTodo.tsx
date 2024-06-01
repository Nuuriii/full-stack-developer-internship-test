import { useState } from 'react';
import { Modal, Text, Button } from '../common';
import { ModalHeader, ModalContent, ModalFooter } from './todoPage.styled';
import axios from 'axios';
import { deleteTodo } from '@/app/lib/reduxToolkit/todo/todoSlice';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

interface DeleteTodoModalProps {
  id: string;
  showDeleteModal: boolean;
  closeModal: () => void;
}

export default function DeleteTodoModal({
  id,
  showDeleteModal,
  closeModal,
}: DeleteTodoModalProps) {
  const [showDeletedModal, setShowDeletedModal] = useState(showDeleteModal);
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const { data: response } = await axios.delete(`/api/todo/${id}`);
        dispatch(deleteTodo(id));
        setShowDeletedModal(false);
        closeModal();

        return response;
      } catch (error) {
        return error;
      }
    },
  });

  return (
    <Modal isClose={showDeletedModal}>
      <ModalHeader>
        <Text htmlTag={'h1'} type={'heading-large'}>
          Delete Todo
        </Text>
        <button
          onClick={() => {
            setShowDeletedModal(false);
            closeModal();
          }}
        >
          X
        </button>
      </ModalHeader>

      <ModalContent>
        <p>Yakin mau hapus</p>
      </ModalContent>

      <ModalFooter>
        <Button
          type="primary"
          onClick={() => {
            setShowDeletedModal(false);
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
          {mutation.isPending ? 'Loading' : 'Hapus'}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
