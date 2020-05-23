const mapPathname = pathname => {
  const array = pathname.split("/");
  return {
    path: pathname,
    firstLevel: array[2] || null,
    secondLevel: array[3] || null
  };
};

const updatePath = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PATH":
      return mapPathname(action.pathname);
    default:
      return state;
  }
};

export default updatePath;
