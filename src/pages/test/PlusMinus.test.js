import { render, screen, fireEvent } from '@testing-library/react';
import PlusMinus from "../PlusMinus"

test("the counter starts at 0", () => {
  render(<PlusMinus/>)

  const counterText = screen.getByTestId("counter")
  expect(counterText).toHaveTextContent("0");
});

test("minus button has correct text", () => {
  render(<PlusMinus/>)
  const minusButton = screen.getByTitle("minus");
  expect(minusButton).toHaveTextContent("-");
})

test("plus button has correct text", () => {
  render(<PlusMinus/>)
  const plusButton = screen.getByTitle("plus")
  expect(plusButton).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", ()=> {
  render(<PlusMinus/>);

  const plusButton = screen.getByRole("button", {
    name : "+"
  });
  const counterText = screen.getByTestId("counter");

  fireEvent.click(plusButton);
  expect(counterText).toHaveTextContent("1");
});

test("When the - button is pressed, the counter changes to -1", () => {
render(<PlusMinus/>);

  const minusButton = screen.getByRole("button", {
    name : "-"
  });
  const counterText = screen.getByTestId("counter");

  fireEvent.click(minusButton);
  expect(counterText).toHaveTextContent("-1");
});

test("on/off button has blue color", ()=>{
render(<PlusMinus/>);

  const onoffButton = screen.getByRole("button", {
    name : "on/off"
  });

  expect(onoffButton).toHaveStyle("background-color: blue")
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<PlusMinus/>);

  const onoffButton = screen.getByRole("button", {
    name : "on/off"
  });
  const plusButton = screen.getByRole("button", {
    name : "+"
  });
  const minusButton = screen.getByRole("button", {
    name : "-"
  });
  // on/off 버튼 클릭 전(초기값) : +/- 버튼 활성화
  expect(plusButton).not.toHaveAttribute('disabled');
  expect(minusButton).not.toHaveAttribute('disabled');

  // on/off 버튼 클릭 (1회차)
  fireEvent.click(onoffButton);

  // on/off 버튼 1회 클릭 후 : +/- 비활성화
  expect(plusButton).toHaveAttribute('disabled');
  expect(minusButton).toHaveAttribute('disabled');

  // on/off 버튼 클릭 (2회차)
  fireEvent.click(onoffButton);

  // on/off 버튼 2회 클릭 후 : +/- 버튼 활성화
  expect(plusButton).not.toHaveAttribute('disabled');
  expect(minusButton).not.toHaveAttribute('disabled');
})