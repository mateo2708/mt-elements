import React from "react";

import Content from "../../components/ContentComponent/Content";
import Section from "../../components/Section/Section";

import AboutStyles from "./AboutStyles";
import { withTheme, makeStyles } from "mt-elements";

import { FaGithub, FaEnvelope } from "react-icons/fa";

const About = props => {
  const useStyles = makeStyles(AboutStyles, props.theme);
  const classes = useStyles();
  return (
    <Content>
      <Section title="What is MT-Elements">
        <p>
          MT Elements is an UI Elements library for ReactJS. This library was
          made as a challenge proposed by{" "}
          <a href="https://github.com/moove-it/coding-challenges/blob/master/react.md">
            Moove IT
          </a>
          .
        </p>
        <p>
          In this library you will find some basic UI elements to use on your
          projects, each element can be customized using the library theming
          feature.
        </p>
        <h2>Features:</h2>
        <ul>
          <li>
            Hight quality and versatile React components for web applications.
          </li>
          <li>Customizable elements using theming.</li>
          <li>Independent unit testing to every component.</li>
          <li>Pre-loaded default themes.</li>
        </ul>
      </Section>
      <Section title="Developer">
        <h3 className={classes.name}>Mateo Tafurt García</h3>
        <h4 className={classes.profesion}>
          Multimedia Engineer - Web Developer
        </h4>
        <div className={classes.contact}>
          <div className={classes.contactElement}>
            <FaEnvelope className={classes.icon}/>
            <a href="mailto:mateotafurg@gmail.com">mateotafurg@gmail.com</a>
          </div>
          <div className={classes.contactElement}>
            <FaGithub className={classes.icon}/>
            <a
              href="https://www.github.com/mateo2708"
              target="_blank"
              rel="noopener noreferrer"
            >
              mateo2708
            </a>
          </div>
        </div>
      </Section>
    </Content>
  );
};

export default withTheme(About);
