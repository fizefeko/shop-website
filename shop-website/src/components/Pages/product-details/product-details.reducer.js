export const initialState = {
  product: {
    id: "",
    fields: {
      Name: "",
      Material: [""],
      AutoID: 0,
      Beschreibung: "",
      "Zielpreis (Brutto)": 0,
      "Lagerstand Produkte": [],
      "Kosten Produktion (Netto)": 0,
      "Zielpreis (Netto)": 0,
      Gewinn: 0,
      "Kosten in %": 0,
      "Auf Lager": 0
    },
    createdTime: ""
  },
  recordsLoading: false,
  recordsError: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        product: action.payload
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
