import React from "react";
import Autocomplete from "../Autocomplete";
import { cleanup, render } from "../../../test-utils";

const { Option } = Autocomplete;

afterEach(cleanup);

describe("Testing different sizes of input", () => {
  test("- Size { large }", () => {
    const { getByTestId } = render(
      <Autocomplete size="large">
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
      </Autocomplete>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByTestId } = render(
      <Autocomplete size="medium">
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
      </Autocomplete>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByTestId } = render(
      <Autocomplete size="small">
        <Option value="1">Opción 1</Option>
        <Option value="2">Opción 2</Option>
      </Autocomplete>
    );
    const inputBox = getByTestId("input-box");
    expect(inputBox).toBeTruthy();
    expect(inputBox.className).toMatch(/small/);
  });
});
