import React from "react";
import SelectInput from "../SelectInput";
import { cleanup, render } from "@testing-library/react";
import ThemeMTProvider from "../../../theme/ThemeProvider";
import defaultThemes from "../../../theme/defaultThemes";

const { Option } = SelectInput;

afterEach(cleanup);

describe("Testine differente sizes of input", () => {
  test("- Size { large }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <SelectInput size="large">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </SelectInput>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <SelectInput size="medium">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </SelectInput>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <SelectInput size="small">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </SelectInput>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/small/);
  });
});
