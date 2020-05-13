import GettingStarted from '../containers/GettingStartedPage/GettingStarted'
import Docs from '../containers/DocsPage/Docs'
import Components from '../containers/ComponentsPage/Components'
const pathStart = "/";
const mainRoutes = [
  {
    path: pathStart + "getting-started",
    component: GettingStarted
  },
  {
    path: pathStart + "docs",
    component: Docs
  },
  {
    path: pathStart + "components",
    component: Components
  },
  { redirect: true, to: pathStart + "getting-started" }
];

export default mainRoutes;
