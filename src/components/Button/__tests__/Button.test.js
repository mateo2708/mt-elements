import React from "react";
import Button from "../Button";
import { cleanup, render } from "@testing-library/react";

import ThemeMTProvider from "../../../theme/ThemeProvider";
import defaultThemes from "../../../theme/defaultThemes";

afterEach(cleanup);

test("Testing default props", () => {
  const { getByRole } = render(
    <ThemeMTProvider theme={defaultThemes.light}>
      <Button />
    </ThemeMTProvider>
  );
  const button = getByRole("button");
  expect(button.className).toMatch(/primary/);
  expect(button.className).toMatch(/medium/);
});

describe("Testing different types of button", () => {
  test("- Type { primary }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button type="primary" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/primary/);
  });
  test("- Type { secondary }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button type="secondary" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/secondary/);
  });
  test("- Type { dasehd }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button type="dashed" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/dashed/);
  });
  test("- Type { link }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button type="link" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/link/);
  });
});

describe("Testine differente sizes of button", () => {
  test("- Size { large }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button size="large" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/large/);
  });
  test("- Size { medium }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button size="medium" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/medium/);
  });
  test("- Size { small }", () => {
    const { getByRole } = render(
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button size="small" />
      </ThemeMTProvider>
    );
    const button = getByRole("button");
    expect(button).toBeTruthy();
    expect(button.className).toMatch(/small/);
  });
});

test("Testing disabled", () => {
  const { getByRole } = render(
    <ThemeMTProvider theme={defaultThemes.light}>
      <Button disabled />
    </ThemeMTProvider>
  );
  const button = getByRole("button");
  expect(button).toBeTruthy();
  expect(button.disabled).toBeTruthy();
});
