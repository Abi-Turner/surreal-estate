import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

// In your test file
jest.mock("react-facebook-login", () => {
  const FacebookLogin = () => <div />;
  return FacebookLogin;
});


describe("App", () => {
  const { asFragment } = render(
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
