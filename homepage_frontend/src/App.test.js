import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders homepage header brand", () => {
  render(<App />);
  expect(screen.getByText(/Sustainably/i)).toBeInTheDocument();
});
