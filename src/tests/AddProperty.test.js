import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("App", () => {
  const { asFragment } = render(
    <BrowserRouter basename="/">
      <AddProperty />
    </BrowserRouter>
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});