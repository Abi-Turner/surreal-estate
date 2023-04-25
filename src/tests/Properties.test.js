import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Properties from "../components/Properties";

jest.mock("react-facebook-login", () => {
  const FacebookLogin = () => <div />;
  return FacebookLogin;
});

describe("Properties", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>
    );
  });
});
