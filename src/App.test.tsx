import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  it("should print 'App' to the screen", () => {
    render(<App />);
    const text = screen.getByText("App");

    expect(text).toBeDefined();
  });
});
