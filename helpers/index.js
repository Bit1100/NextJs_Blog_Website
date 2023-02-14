export const setTitleCase = (category) => {
  return category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase();
};
