import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};


test('render login component in the document', () => {
  const component = render(<App />);
  const childElement = component.getByPlaceholderText("Email");
  expect(childElement).toBeTruthy();
})

test('Login component header displays the title for the page', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to vas/i);
  const linkElement1 = screen.getByText(/login here/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
});

test("render the appointment form with two input fields and one button", async()=>{
  render(<App />);
  const input1 = screen.getByTestId("email-input");
  const input2 = screen.getByTestId("password-input");
  const buttonList = await screen.findAllByRole("button");
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(buttonList).toHaveLength(1);
})

test("email input field should accept email", ()=>{
  render(<App />);
  const email = screen.getByPlaceholderText("Email");
  userEvent.type(email, "manoj");
  expect(email.value).not.toMatch("manoj@gmail.com");

})


