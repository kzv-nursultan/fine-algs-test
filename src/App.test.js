import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders initial page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit your details/i);
  expect(linkElement).toBeInTheDocument();
});

test('fill out name', () => {
  render(<App/>);
  const nameInput = screen.getByTestId('name-input');
  fireEvent.change(nameInput, {target: {value: 'john doe'}});
  expect(nameInput.value).toBe('john doe')
});

test('fill out email', () => {
  render(<App/>);
  const emailInput = screen.getByTestId('email-input');
  fireEvent.change(emailInput, {target: {value: 'email@email.test'}});
  expect(emailInput.value).toBe('email@email.test')
});

test('submit form', () => {
  render(<App/>);
  const submitBtn = screen.getByText(/Start the Course/i)
  fireEvent.click(submitBtn);
  expect(screen.getByText(/Success/i))
})

