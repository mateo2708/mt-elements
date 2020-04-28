import React from "react";
import InputText from "../InputText";
import { cleanup, render } from "@testing-library/react";
import ThemeMTProvider from "../../../theme/ThemeProvider";
import defaultThemes from "../../../theme/defaultThemes";

afterEach(cleanup);

describe("Testine differente sizes of input", () => {
  test("- Size { large }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <InputText size="large" />
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <InputText size="medium" />
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <InputText size="small" />
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/small/);
  });
});

test("Testing disabled", () => {
  const { getByPlaceholderText } = render(
    <ThemeMTProvider theme={defaultThemes.light}>
      <InputText placeholder="test-input" disabled />
    </ThemeMTProvider>
  );
  const input = getByPlaceholderText("test-input");
  expect(input).toBeTruthy();
  expect(input.disabled).toBeTruthy();
});
