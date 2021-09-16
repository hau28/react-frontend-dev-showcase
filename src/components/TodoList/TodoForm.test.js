import { render, fireEvent, waitFor } from "@testing-library/react";
import { todoListStore } from "../../pages/TodoPage";
import TodoForm from "./TodoForm";
import { Provider } from "react-redux";

let getByTestId;

beforeEach(() => {
  const comp = render(
    <Provider store={todoListStore}>
      <TodoForm />
    </Provider>
  );
  getByTestId = comp.getByTestId;
});

test("change todo value correctly", () => {
  const todoInputEl = getByTestId("todo-input");
  fireEvent.change(todoInputEl, {
    target: {
      value: "new todo",
    },
  });
  expect(todoInputEl.value).toBe("new todo");
});

test("adding todo resets todo", () => {
  const todoInputEl = getByTestId("todo-input");
  const addButtonEl = getByTestId("add-button");
  fireEvent.change(todoInputEl, {
    target: {
      value: "new todo",
    },
  });
  fireEvent.click(addButtonEl);
  expect(todoInputEl.value).toBe("");
});

test("change tag value correctly", () => {
  const tagInputEl = getByTestId("tag-input");
  fireEvent.change(tagInputEl, {
    target: {
      value: "new tag",
    },
  });
  expect(tagInputEl.value).toBe("new tag");
});

test("pressing enter adds tag", () => {
  const tagInputEl = getByTestId("tag-input");
  fireEvent.change(tagInputEl, {
    target: {
      value: "new tag",
    },
  });
  fireEvent.keyPress(tagInputEl, {
    key: "Enter",
    keyCode: 13,
  });
  const newTag = getByTestId("new tag");
  expect(newTag).toHaveTextContent("new tag");
});

test("adding tag resets tag input", () => {
  const tagInputEl = getByTestId("tag-input");
  fireEvent.change(tagInputEl, {
    target: {
      value: "test",
    },
  });
  fireEvent.keyPress(tagInputEl, {
    key: "Enter",
    keyCode: 13,
  });
  expect(tagInputEl.value).toBe("");
});
