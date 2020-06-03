import React, { Component } from "react";

/**
 * @param {hasError, info, error} props
 * ErrorBoundary
 * contiene todo los errores del componente y los imprime en un h1
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  //funcion que contiene dos variables error y info, lo que hace es que te muestra en error y la informacion detallada.
  componentDidCatch(error, info) {
    this.setState({ hasError: true, message: error.message });
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Ocurrio un error</h1>
          <h3>{this.state.message}</h3>
        </div>
      );
      // return <h1>Ups! Algo ha salido mal</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
