export const initialState = {
  material: {}
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        material: action.payload
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
