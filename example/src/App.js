import React, { useRef, useEffect, useState } from "react";

import {
  InputText,
  InputNumber,
  Button,
  SelectInput,
  Autocomplete,
  ThemeMTProvider,
  defaultThemes
} from "mt-elements";

import { createUseStyles } from "react-jss";
import axios from "axios";

const useStyles = createUseStyles({
  test: {
    width: "20rem"
  }
});

const { Option } = SelectInput;

const test = e => {
  console.log("testeado", e);
};
const App = () => {
  const classes = useStyles();
  const inputRef = useRef();
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      console.log(response);
      setState(
        response.data.results.reduce((array, item) => {
          return [...array, item.name];
        }, [])
      );
    });
  }, []);

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
            alertMode="error"
            alertMessage="elError.com"
            inputRef={inputRef}
          />
          <InputText
            id="second"
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
          />
          <InputNumber
            shape="round"
            size="medium"
            placeholder="Normal"
            max="5"
            min="1"
          />
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
            alertMode="warning"
            alertMessage="La warning"
          >
            <Option value="1">Opción 1</Option>
            <Option value="2">Opción 2</Option>
            <Option value="3">Opción 3</Option>
          </SelectInput>
          <SelectInput
            label="Select Input"
            placeholder="Select something"
            onChange={test}
          >
            <Option value="1">Opción 1</Option>
            <Option value="2">Opción 2</Option>
            <Option value="3">Opción 3</Option>
          </SelectInput>
          <SelectInput
            className={classes.test}
            label="Select Input"
            placeholder="Select something"
            onChange={test}
            mode="multiple"
          >
            <Option value="1">Opción 1</Option>
            <Option value="2">Opción 2</Option>
            <Option value="3">Opción 3</Option>
          </SelectInput>
        </div>
        <div style={{ display: "flex", flexFlow: "column nowrap" }}>
          <Autocomplete
            placeholder="Escribite"
            label="Autocomplete"
            options={state}
          />
          <Autocomplete
            placeholder="Escribite"
            label="Autocomplete"
            maxOptions="5"
          >
            <Option>Opción 1</Option>
            <Option>Opción 2</Option>
            <Option>Opción 3</Option>
            <Option>Opción 4</Option>
            <Option>Opción 5</Option>
            <Option>Opción 6</Option>
          </Autocomplete>
        </div>
      </div>
    </ThemeMTProvider>
  );
};

export default App;
