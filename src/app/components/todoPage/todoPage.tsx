import {
  TodoContainer,
  TodoWrapper,
  ButtonContainer,
  TodoItemWrapper,
} from './todoPage.styled';
import { Text } from '@/app/components/common';
import ListTodo from './ListTodo';

export default function TodoPage() {
  return (
    <TodoContainer>
      <TodoWrapper>
        <Text htmlTag={'h1'} type={'heading-xlarge'} className="title-app">
          Todo List
        </Text>

        <ButtonContainer>
          <button className="btn-add">+</button>
        </ButtonContainer>

        <ListTodo />
      </TodoWrapper>
    </TodoContainer>
  );
}
