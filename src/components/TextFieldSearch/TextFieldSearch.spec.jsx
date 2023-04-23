import { render, screen } from "@testing-library/react"
import { TextFieldSearch } from "."
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

describe("<TextFieldSearch />", () => {
  it("should render with props", () => {
    const fn = jest.fn();
    render(<TextFieldSearch onChange={fn} value={"test"} />);
    const input = screen.getByPlaceholderText(/burcar.../i)

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("test");
  });

  it("should call handleChangeFunction on each key pressed", () => {
    const fn = jest.fn();
    render(<TextFieldSearch onChange={fn} />);
    const input = screen.getByPlaceholderText(/burcar.../i);
    const value = "Lorem ipsum";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should change value when backspacing text", () => {
    const fn = jest.fn();
    render(<TextFieldSearch onChange={fn} />);
    const input = screen.getByPlaceholderText(/burcar.../i);
    const value = "Lorem ipsum";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);

    userEvent.type(input, "{backspace}");

    expect(input.value).toBe("Lorem ipsu");
    expect(fn).toHaveBeenCalledTimes(value.length+1);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const {container} = render(<TextFieldSearch onChange={fn} value={"test"} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
