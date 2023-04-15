import { render } from "@testing-library/react";
import React from "react";
import AddProperty from "../components/AddProperty";

describe("Add Property", () => {
  it("renders correctly", () => {
    render(<AddProperty />);
  });
});
