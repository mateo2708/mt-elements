import React from "react";

import {
  InputText,
  InputNumber,
  Button,
  SelectInput,
  Autocomplete,
  ThemeProvider
} from "mt-elements";

const theme = {
  primaryColor: "blue",
  secondaryColor: "red",
  paragraphfont: "Open Sans",
  titlesFont: "Open Sans"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <InputText />
      <InputNumber />
      <Button />
      <SelectInput />
      <Autocomplete />
    </ThemeProvider>
  );
};

export default App;
