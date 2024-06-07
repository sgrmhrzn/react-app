import { render } from "@testing-library/react";
import { ToDoList } from "../../pages/to-do-list/to-do-list.component";

describe('To do list', () => {
  test("Renders the add page", () => {
    render(<ToDoList />)
    expect(true).toBeTruthy()
  })
  test('Should load to do list', () => {
    const { container } = render(<ToDoList />);
    expect(container).toBeTruthy();

    // const button = getByTestId(container, 'add-btn');
    // fireEvent.click(button);
    // expect(screen.getByTestId('add-dialog')).toBeTruthy();
  });
});