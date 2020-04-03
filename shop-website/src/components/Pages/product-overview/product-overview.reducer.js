export const initialState = {
  records: [],
  recordsLoading: false,
  recordsError: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        records: action.payload
      };
    case "FETCH_ERROR":
      return {
        ...state,
        recordsError: action.payload
      };

    default:
      return state;
  }
};
