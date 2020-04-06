export const initialState = {
  product: {
    id: "",
    fields: {
      Name: "",
      Material: [],
      AutoID: 0,
      Beschreibung: "",
      "Zielpreis (Brutto)": 0,
      "Lagerstand Produkte": [],
      "Kosten Produktion (Netto)": 0,
      "Zielpreis (Netto)": 0,
      Gewinn: 0,
      "Kosten in %": 0,
      "Auf Lager": 0,
    },
    createdTime: "",
  },
  allOptions: [],
  selectFields: {},
  selectFieldsFinishedLoading: false,
  recordsLoading: false,
  recordsError: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        product: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        recordsError: action.payload,
      };
    case "ADD_OPTION":
      return {
        ...state,
        allOptions: [...state.allOptions, action.payload],
      };
    case "ADD_SELECT_FIELD":
      return {
        ...state,
        selectFields: {
          ...state.selectFields,
          [action.payload]: [],
        },
      };
    case "CLEAR_SELECT_FIELD":
      return {
        ...state,
        selectFields: {
          ...state.selectFields,
          [action.payload]: "",
        },
      };
    case "ADD_OPTION_VALUE":
      return {
        ...state,
        optionValues: [...state.optionValues, action.payload],
      };
    case "SELECT_FIELD_FINISHED_LOADING":
      return {
        ...state,
        selectFieldsFinishedLoading: action.payload,
      };
    default:
      return state;
  }
};
