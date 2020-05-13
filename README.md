# mt-elements

> React UI Library

[![NPM](https://img.shields.io/npm/v/mt-elements.svg)](https://www.npmjs.com/package/mt-elements) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mt-elements
```

## Usage

```jsx
import React, { Component } from "react";

import { Button, ThemeMTProvider, defaultThemes } from "mt-elements";

class Example extends Component {
  render() {
    return (
      <ThemeMTProvider theme={defaultThemes.light}>
        <Button type="primary" size="large" shape="round">
          Test Button
        </Button>
      </ThemeMTProvider>
    );
  }
}
```

## License

MIT © [mateo2708](https://github.com/mateo2708)
