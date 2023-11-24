import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("the counter must starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("the minus button has correct text", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("the plus button has correct text", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("When the +  button is pressed, the counter changes to 1", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the -  button is pressed, the counter changes to -1", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has pink color", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: "pink"});
});


test("Prevent the -, +  button from being pressed when the on/off button is clicked", () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toBeDisabled();
});