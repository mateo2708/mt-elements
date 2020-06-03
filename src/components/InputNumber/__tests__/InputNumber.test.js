import React from "react";
import InputNumber from "../InputNumber";
import {
  cleanup,
  fireEvent,
  render,
  testInputSizes,
  testInputAlertModes
} from "../../../test-utils";

afterEach(cleanup);

testInputSizes("InputNumber", "input-box", InputNumber);

testInputAlertModes("InputNumber", "input-box", InputNumber);

test("Testing disabled", () => {
  const { getByPlaceholderText } = render(
    <InputNumber placeholder="test-input" disabled />
  );
  const input = getByPlaceholderText("test-input");
  expect(input).toBeTruthy();
  expect(input.disabled).toBeTruthy();
});
