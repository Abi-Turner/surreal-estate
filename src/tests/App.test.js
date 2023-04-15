import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

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
