import {
  ListTodoContainer,
  TodoItemWrapper,
  CheckBoxAndTodo,
} from './todoPage.styled';
import { Text } from '@/app/components/common';

export default function ListTodo() {
  return (
    <ListTodoContainer>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>hahahahhaha</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>

      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>

      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>

      <TodoItemWrapper>
        <CheckBoxAndTodo>
          <input type="checkbox" />
          <p>jjj</p>
        </CheckBoxAndTodo>
        <div>Edit</div>
      </TodoItemWrapper>
      {/* <Text htmlTag={'p'} type="paragraph-regular" className="empty-todo-text">
        Empty Todo. . .
      </Text> */}
    </ListTodoContainer>
  );
}
