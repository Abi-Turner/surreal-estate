import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders app correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
