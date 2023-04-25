import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

jest.mock("react-facebook-login", () => {
  const FacebookLogin = () => <div />;
  return FacebookLogin;
});

describe("NavBar", () => {
  const { asFragment } = render(
    <BrowserRouter basename="/">
      <NavBar />
    </BrowserRouter>
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
