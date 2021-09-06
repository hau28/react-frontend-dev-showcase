import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoForm from "../components/TodoList/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import todoListReducer from "../redux/todoList/reducers";
import {
  FullScreenContainer,
  FullscreenPaper,
  Heading1,
} from "../components/Styled";
import NavbarWrapper from "../components/NavbarWrapper";

const todoListStore = createStore(todoListReducer);

export default function TodoPage() {
  return (
    <Provider store={todoListStore}>
      <NavbarWrapper>
        <FullScreenContainer>
          <FullscreenPaper>
            <Heading1 textAlign="center">Simple Todo List</Heading1>
            <TodoForm />
            <TodoList />
          </FullscreenPaper>
        </FullScreenContainer>
      </NavbarWrapper>
    </Provider>
  );
}
