import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import CodeElementStyles from "./CodeElementStyle";
import { withTheme, makeStyles } from "mt-elements";
import classNames from "classnames";

import "../../prism.css";

const CodeElement = props => {
  const useStyles = makeStyles(CodeElementStyles, props.theme);
  const classes = useStyles();

  return (
    <div
      className={classNames(classes.container, props.className)}
      style={props.style}
    >
      <Highlight
        {...defaultProps}
        style={classes.highlight}
        code={props.code}
        language={props.language}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default withTheme(CodeElement);
