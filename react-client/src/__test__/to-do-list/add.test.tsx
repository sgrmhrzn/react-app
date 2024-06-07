import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import { AddToDoMemo } from "../../pages/to-do-list/add-with-memo.component"
// import { Router } from "react-router-dom";


describe('Add to do', () => {
  test("Renders the add page", () => {
    render(<AddToDoMemo />)
    expect(true).toBeTruthy()
  })
  test('Should open add dialog on btn click', () => {
    const { container } = render(<AddToDoMemo />);

    const button = getByTestId(container, 'add-btn');
    fireEvent.click(button);
    expect(screen.getByTestId('add-dialog')).toBeTruthy();
  });
});