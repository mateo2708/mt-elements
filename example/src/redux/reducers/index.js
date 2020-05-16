const mapPathname = pathname => {
  const array = pathname.split("/");
  return {
    path: pathname,
    firstLevel: array[1] || null,
    secondLevel: array[2] || null
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
