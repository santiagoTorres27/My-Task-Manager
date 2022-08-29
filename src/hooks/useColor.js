const useColor = (category) => {
  switch (category) {
    case "School":
      return "var(--color-category-school)";

    case "Home":
      return "var(--color-category-home)";

    case "Health":
      return "var(--color-category-health)";

    case "Shopping":
      return "var(--color-category-shopping)";

    default:
      break;
  }
};

export default useColor;
