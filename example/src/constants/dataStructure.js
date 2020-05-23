import Docs from "../containers/DocsPage/Docs";
import Components from "../containers/ComponentsPage/Components";

//Pages
import About from "../pages/About/About";
import Installation from "../pages/Installation/Installation";
import Usage from "../pages/Usage/Usage";
import Styling from "../pages/Styling/Styling";
import Theming from "../pages/Theming/Theming";
import ButtonPage from "../pages/Button/Button";
import InputTextPage from "../pages/InputText/InputTextPage";
import InputNumberPage from "../pages/InputNumber/InputNumberPage";
import SelectInputPage from "../pages/SelectInput/SelectInputPage";
import AutocompletePage from "../pages/Autocomplete/AutocompletePage";

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
        },
        {
          order: 3,
          route: "styling",
          title: "Styling Components",
          component: Styling
        },
        {
          order: 4,
          route: "theming",
          title: "Theming",
          component: Theming
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
          route: "button",
          title: "Button",
          component: ButtonPage
        },
        {
          order: 1,
          route: "input-text",
          title: "InputText",
          component: InputTextPage
        },
        {
          order: 2,
          route: "input-number",
          title: "InputNumber",
          component: InputNumberPage
        },
        {
          order: 3,
          route: "select-input",
          title: "SelectInput",
          component: SelectInputPage
        },
        {
          order: 4,
          route: "autocomplete",
          title: "Autocomplete",
          component: AutocompletePage
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
