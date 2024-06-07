import { render, screen } from "@testing-library/react"
import Home from "../pages/home/home.component"
// import { Router } from "react-router-dom";


describe('Home page', () => {
  test('should contain welcome text', () => {
    render(<Home />);
    const getByText = screen.getByTestId('welcome-text');
    expect(getByText.textContent).toEqual('Welcome to TODO App');
    // const history = createMemoryHistory({ initialEntries: ['/home'] });
    // const { getByText } = render(
    //   <Router history={history}>
    //     <ButtonLogin />
    //   </Router>
    // );
    // expect(history.location.pathname).toBe('/');
    // fireEvent.click(getByText('Iniciar sesión'));
    // expect(history.location.pathname).toBe('/login');
  });
});