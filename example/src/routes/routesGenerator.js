import dataStructure, { getAllPages } from "../constants/dataStructure";

export const pagesRoutes = () => {
  const pathStart = "/mt-elements/";
  const pages = getAllPages();
  const routes = pages.map(page => {
    return {
      path: pathStart + page.route,
      component: page.component
    };
  });
  routes.push({ redirect: true, to: pathStart + pages[0].route });
  console.log("Rutas:", routes);
  return routes;
};

export const itemsRoutes = page => {
  const pathStart = "/mt-elements/" + page + "/";
  const currentPage = dataStructure.pages.find(item => item.route === page);
  if (currentPage) {
    const items = currentPage.items;
    const routes = items.map(item => {
      return {
        path: pathStart + item.route,
        component: item.component
      };
    });
    routes.push({ redirect: true, to: pathStart + items[0].route });
    console.log("Rutas items:", routes);
    return routes;
  }

  return [];
};
