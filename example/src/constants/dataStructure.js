import React from "react";
import Docs from "../containers/DocsPage/Docs";
import Components from "../containers/ComponentsPage/Components";
import Content from "../components/ContentComponent/Content";

//Pages
import About from "../pages/About/About";
import Installation from "../pages/Installation/Installation";
import Usage from "../pages/Usage/Usage";

const Demo = () => {
  return (
    <Content>
      <div style={{ display: "flex", width: "50rem" }}>El demo</div>
    </Content>
  );
};

const dataStructure = {
  pages: [
    {
      order: 0,
      route: "docs",
      title: "Docs",
      component: Docs,
      items: [
        {
          order: 0,
          route: "about",
          title: "About MT-Elements",
          component: About
        },
        {
          order: 1,
          route: "installation",
          title: "Installation",
          component: Installation
        },
        {
          order: 2,
          route: "usage",
          title: "Usage",
          component: Usage
        }
      ]
    },
    {
      order: 1,
      route: "components",
      title: "Components",
      component: Components,
      items: [
        {
          order: 0,
          route: "installation",
          title: "Installation",
          component: Demo
        },
        {
          order: 1,
          route: "usage",
          title: "Usage",
          component: Demo
        }
      ]
    }
  ]
};

export const getAllPages = () => {
  return dataStructure.pages.map(page => {
    return {
      order: page.order,
      route: page.route,
      title: page.title,
      component: page.component
    };
  });
};
export const getItems = pageRoute => {
  const pages = dataStructure.pages;
  const page = pages.find(page => page.route === pageRoute);
  return page ? page.items : [];
};

export default dataStructure;
