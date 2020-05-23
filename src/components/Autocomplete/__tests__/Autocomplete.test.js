import React from "react";
import Autocomplete from "../Autocomplete";
import { cleanup, render } from "@testing-library/react";
import ThemeMTProvider from "../../../theme/ThemeProvider";
import defaultThemes from "../../../theme/defaultThemes";

const { Option } = Autocomplete;

afterEach(cleanup);

describe("Testine differente sizes of input", () => {
  test("- Size { large }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Autocomplete size="large">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </Autocomplete>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Autocomplete size="medium">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </Autocomplete>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByTestId } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Autocomplete size="small">
          <Option value="1">Opción 1</Option>
          <Option value="2">Opción 2</Option>
        </Autocomplete>
      </ThemeMTProvider>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/small/);
  });
});
