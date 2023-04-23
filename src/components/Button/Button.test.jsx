import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  describe("render Button element with props", () => {
    test("label prop", () => {
      expect.assertions(2);

      render(<Button onClick={jest.fn()} label={"carregar mais posts..."} />);
      const button = screen.getByRole("button", {
        name: /carregar mais posts.../i,
      });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("button");
    });
  });

  test("should call function on button click, one per click", () => {
    const fn = jest.fn();
    render(<Button label={"load more"} onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button); //userEvent mais comum que fireEvent, tem como base um evento mais natural e comum do sistema

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("shouldn't have click events when disabled", () => {
    const fn = jest.fn();
    render(<Button label={"load more"} onClick={fn} disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(0);
    expect(button).toBeDisabled();
  });

  test("should be enabled when disabled is false", () => {
    render(<Button onClick={jest.fn()} label={"load more"} disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeEnabled();
  });
});
