import React from "react";
import GettingStarted from "../containers/GettingStartedPage/GettingStarted";
import Docs from "../containers/DocsPage/Docs";
import Components from "../containers/ComponentsPage/Components";

const Demo = () => {
  return <div>Dummy Element</div>;
};

const dataStructure = {
  pages: [
    {
      order: 0,
      route: "getting-started",
      title: "Getting Started",
      component: GettingStarted,
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
    },
    {
      order: 1,
      route: "docs",
      title: "Docs",
      component: Docs,
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
    },
    {
      order: 2,
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
