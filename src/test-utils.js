// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import ThemeMTProvider from "./theme/ThemeMTProvider";
import defaultThemes from "./theme/defaultThemes";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeMTProvider theme={defaultThemes.light}>{children}</ThemeMTProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export const testInputSizes = (componentName, testID, Component) => {
  describe(`Testing different sizes of ${componentName}`, () => {
    test("- Size { large }", () => {
      const { getByTestId } = customRender(<Component size="large" />);
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/large/);
    });
    test("- Size { medium }", () => {
      const { getByTestId } = customRender(<Component size="medium" />);
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/medium/);
    });
    test("- Size { small }", () => {
      const { getByTestId } = customRender(<Component size="small" />);
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/small/);
    });
  });
};

export const testInputAlertModes = (componentName, testID, Component) => {
  describe(`Testing alerts mode of ${componentName}`, () => {
    test("- Alert Mode { success }", () => {
      const { getByTestId } = customRender(
        <Component alertMode="success" alertMessage="success" />
      );
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/success/);
    });
    test("- Alert Mode { warning }", () => {
      const { getByTestId } = customRender(
        <Component alertMode="warning" alertMessage="warning" />
      );
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/warning/);
    });
    test("- Alert Mode { error }", () => {
      const { getByTestId } = customRender(
        <Component alertMode="error" alertMessage="error" />
      );
      const inputBox = getByTestId(testID);
      expect(inputBox).toBeTruthy();
      expect(inputBox.className).toMatch(/error/);
    });
  });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
