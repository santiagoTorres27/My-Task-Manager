const useColorFilter = (category) => {
  const color = category.toLowerCase();
  return `var(--color-category-${color}-filter)`;
};

export default useColorFilter;
