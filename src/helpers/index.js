export const isJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const scrollUp = (y = 0, x = 0) => {
  window.scrollTo(x, y);
};
