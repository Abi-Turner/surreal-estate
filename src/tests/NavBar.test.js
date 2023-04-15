import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

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
