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
import MainLayout from "../components/MainLayout";
import React from "react";

export const todoListStore = createStore(todoListReducer);

export default class TodoPage extends React.Component {
  render() {
    return (
      <Provider store={todoListStore}>
        <MainLayout>
          <FullScreenContainer>
            <FullscreenPaper>
              <Heading1 textAlign="center">Simple Todo List</Heading1>
              <TodoForm />
              <TodoList />
            </FullscreenPaper>
          </FullScreenContainer>
        </MainLayout>
      </Provider>
    );
  }
}
