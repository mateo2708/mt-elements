import React from "react";
import InputText from "../InputText";
import {
  cleanup,
  fireEvent,
  render,
  testInputSizes,
  testInputAlertModes
} from "../../../test-utils";

afterEach(cleanup);

testInputSizes("InputText", "input-box", InputText);

testInputAlertModes("InputText", "input-box", InputText);

test("Testing input onChange function", () => {
  let value = undefined;
  const onChange = e => {
    value = e;
  };

  const { getByPlaceholderText } = render(
    <InputText placeholder="test-input" onChange={onChange} />
  );
  const input = getByPlaceholderText("test-input");
  fireEvent.change(input, { target: { value: "test" } });
  expect(value).toBe("test");
});

test("Testing disabled", () => {
  const { getByPlaceholderText } = render(
    <InputText placeholder="test-input" disabled />
  );
  const input = getByPlaceholderText("test-input");
  expect(input).toBeTruthy();
  expect(input.disabled).toBeTruthy();
});
