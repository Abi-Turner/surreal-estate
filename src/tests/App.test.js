import { render } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

// test("renders app correctly", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Surreal Estate/i);
//   expect(linkElement).toBeInTheDocument();
// });

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
