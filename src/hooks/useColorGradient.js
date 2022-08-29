const useColorGradient = (category) => {
  const color = category.toLowerCase();

  return `var(--color-category-${color}-1)`;
};

export default useColorGradient;
