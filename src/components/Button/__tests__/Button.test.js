import React from "react";
import Button from "../Button";
import { cleanup, render } from "../../../test-utils";

afterEach(cleanup);

test("Testing default props", () => {
  const { getByRole } = render(<Button />);
  const button = getByRole("button");
  expect(button.className).toMatch(/primary/);
  expect(button.className).toMatch(/medium/);
});

describe("Testing different types of button", () => {
  test("- Type { primary }", () => {
    const { getByRole } = render(<Button type="primary" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/primary/);
  });
  test("- Type { secondary }", () => {
    const { getByRole } = render(<Button type="secondary" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/secondary/);
  });
  test("- Type { dasehd }", () => {
    const { getByRole } = render(<Button type="dashed" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/dashed/);
  });
  test("- Type { link }", () => {
    const { getByRole } = render(<Button type="link" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/link/);
  });
});

describe("Testing different sizes of button", () => {
  test("- Size { large }", () => {
    const { getByRole } = render(<Button size="large" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByRole } = render(<Button size="medium" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByRole } = render(<Button size="small" />);
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/small/);
  });
});

test("Testing disabled", () => {
  const { getByRole } = render(<Button disabled />);
  const button = getByRole("button");
  expect(button).toBeTruthy();
  expect(button.disabled).toBeTruthy();
});
