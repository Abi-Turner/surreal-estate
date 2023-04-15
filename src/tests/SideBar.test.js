import { render } from "@testing-library/react";
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
});
