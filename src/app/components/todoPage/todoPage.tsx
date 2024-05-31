import {
  TodoContainer,
  TodoWrapper,
  ButtonContainer,
  TodoItemWrapper,
} from './todoPage.styled';
import { Text } from '@/app/components/common';
import ListTodo from './ListTodo';
import AddTodoModal from './AddTodoModal';

export default function TodoPage() {
  return (
    <TodoContainer>
      <TodoWrapper>
        <Text htmlTag={'h1'} type={'heading-xlarge'} className="title-app">
          Todo List
        </Text>

        <AddTodoModal />

        <ListTodo />
      </TodoWrapper>
    </TodoContainer>
  );
}
