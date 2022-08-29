export const tasksReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...initialState];

    case "UPDATE":
      return initialState.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });

    case "DELETE":
      return initialState.filter((task) => task.id !== action.payload);

    // - Sorting
    case "SORT_NEWEST":
      return [...initialState].sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else {
          return -1;
        }
      });

    case "SORT_OLDEST":
      return [...initialState].sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });

    case "SORT_ALPH_ASC":
      return [...initialState].sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });

    case "SORT_ALPH_DESC":
      return [...initialState].sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else {
          return -1;
        }
      });

    // - Filtering
    case "FILTER_BY_CATEGORY":
      return [...initialState].filter(
        (task) => task.category === action.payload
      );

    default:
      break;
  }
};
