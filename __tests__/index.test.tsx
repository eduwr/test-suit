import {
  render,
  screen,
  cleanup,
  fireEvent,
  getByRole,
} from "@testing-library/react";

import Home from "../src/pages/index";
import { server } from "../mocks/server";

describe("<Home />", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    // Clean up after all tests are done, preventing this
    // interception layer from affecting irrelevant tests.
    server.close();
  });

  afterEach(cleanup);

  beforeEach(() => {
    render(<Home />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Todos/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the add todo button", () => {
    const addTodoButton = screen.getByRole("button", {
      name: /Add Todo/i,
    });

    expect(addTodoButton).toBeInTheDocument();
  });

  it("Should toggle showing the input if the add todo button is clicked", async () => {
    let input;
    const addTodoButton = screen.getByRole("button", { name: /Add Todo/i });

    input = screen.queryByRole("textbox");
    expect(input).not.toBeInTheDocument();

    fireEvent.click(addTodoButton);

    input = await screen.findByRole("textbox");
    expect(input).toBeInTheDocument();

    fireEvent.click(addTodoButton);

    input = screen.queryByRole("textbox");
    expect(input).not.toBeInTheDocument();
  });

  it("Should add a todo if input has some text and the button is clicked", async () => {
    const inputValue = "This is a todo!";
    const addTodoButton = screen.getByRole("button", { name: /Add Todo/i });

    fireEvent.click(addTodoButton);

    const input = await screen.findByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: inputValue,
      },
    });

    fireEvent.click(addTodoButton);

    const todo = await screen.findByText(/This is a todo!/i);
    expect(todo).toBeInTheDocument();
  });
});
