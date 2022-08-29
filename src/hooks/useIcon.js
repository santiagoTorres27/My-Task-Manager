const useIcon = (category) => {
  switch (category) {
    case "School":
      return "img/icons/education.svg";

    case "Home":
      return "img/icons/home.svg";

    case "Health":
      return "img/icons/health.svg";

    case "Shopping":
      return "img/icons/shopping.svg";
  }
};

export default useIcon;
