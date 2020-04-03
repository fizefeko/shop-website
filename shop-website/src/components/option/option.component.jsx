import React, { useReducer, useEffect } from "react";
import Axios from "axios";

import { initialState, reducer } from "./option.reducer.js";

const Option = ({ Id }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Axios.get(
      `https://api.airtable.com/v0/appFOfImuRrfkIbgc/Lagerstand%20Material/${Id}?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((response) => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    });
  }, [Id]);
  if (state.material.fields !== undefined) {
    return (
      <option value={state.material.fields["Option Name"]}>
        {state.material.fields["Option Name"]}
      </option>
    );
  } else {
    return null;
  }
};

export default Option;
