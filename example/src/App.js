import React, { useRef } from "react";

import {
  InputText,
  InputNumber,
  Button,
  SelectInput,
  Autocomplete,
  ThemeMTProvider,
  defaultThemes
} from "mt-elements";

const { Option } = SelectInput;

const test = e => {
  console.log("testeado", e);
};
const App = () => {
  const inputRef = useRef();

  return (
    <ThemeMTProvider theme={defaultThemes.light}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
          <InputText
            type="text"
            size="large"
            placeholder="Type text"
            onChange={test}
            alertMode="error"
            alertMessage="elError.com"
            inputRef={inputRef}
          />
          <InputText
            type="password"
            placeholder="Placeholder"
            shape="round"
            label="Läbel"
            alertMode="warning"
            alertMessage="laWarning.com"
            onChange={test}
          />
          <InputText
            type="email"
            size="small"
            placeholder="Email"
            label="El label"
            alertMode="success"
            alertMessage="elSuccess.com"
          />
        </div>
        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
          <InputNumber
            size="large"
            placeholder="Formateado"
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            max="10000"
            min="0"
            step="100"
            alertMode="warning"
            alertMessage="Warning number"
          />
          <InputNumber
            shape="round"
            size="medium"
            placeholder="Normal"
            max="5"
            min="1"
          />{" "}
        </div>

        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
          <Button type="primary" size="large" shape="round" onClick={test}>
            Prueba 1
          </Button>
          <Button type="secondary" size="large" onClick={test}>
            Prueba 2
          </Button>
          <Button type="dashed" size="large" onClick={test}>
            Prueba 3
          </Button>
          <Button type="link" size="large" onClick={test}>
            Prueba 4
          </Button>
        </div>

        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
          <SelectInput
            label="Select Input"
            placeholder="Select something"
            onChange={test}
          >
            <Option value="1">Opción 1</Option>
            <Option value="2">Opción 2</Option>
            <Option value="3">Opción 3</Option>
          </SelectInput>
        </div>
        <Autocomplete />
      </div>
    </ThemeMTProvider>
  );
};

export default App;
