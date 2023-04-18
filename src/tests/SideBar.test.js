import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
  });

  it("updates the query state when the user types in the input field", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test input" } });
    expect(input.value).toBe("test input");
  });
});
