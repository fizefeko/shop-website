import React, { useEffect, useReducer } from "react";
import Axios from "axios";
import "./product-details.styles.css";
import { initialState, reducer } from "./product-details.reducer";
import Option from "../../option/option.component";

const ProductDetails = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get(
      `https://api.airtable.com/v0/appFOfImuRrfkIbgc/Stückliste/${props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((response) => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      for (var i = 0; i < response.data.fields.Material.length; i++) {
        Axios.get(
          `https://api.airtable.com/v0/appFOfImuRrfkIbgc/Lagerstand%20Material/${response.data.fields.Material[i]}?api_key=${process.env.REACT_APP_API_KEY}`
        ).then((response) => {
          if (
            !state.allOptions.includes(response.data.fields["Option Name"]) &&
            response.data.fields["Option Name"] !== "Allgemein"
          ) {
            let optionName = response.data.fields["Option Name"];
            let materialName = response.data.fields["Materialname"];

            dispatch({
              type: "ADD_OPTION",
              payload: { optionName, materialName },
            });
          }
        });
      }
    });
    document.title = state.product.fields.Name;
  }, []);

  for (var i = 0; i < state.allOptions.length; i++) {
    let option = state.allOptions[i];
    if (
      !Object.prototype.hasOwnProperty.call(
        state.selectFields,
        option.optionName
      )
    ) {
      dispatch({
        type: "ADD_SELECT_FIELD",
        payload: option.optionName,
      });
    }
  }
  for (var i = 0; i < state.allOptions.length; i++) {
    let option = state.allOptions[i];
    for (var key in state.selectFields) {
      if (
        key === option.optionName &&
        !state.selectFields[key].includes(option.materialName)
      ) {
        state.selectFields[key].push(option.materialName);
      }
    }
  }

  return (
    <div>
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                {state.product.fields.Bilder ? (
                  <div className="tab-pane active" id="pic-1">
                    <img
                      src={state.product.fields.Bilder[0].url}
                      alt="product"
                    />
                  </div>
                ) : (
                  <div className="tab-pane active" id="pic-1">
                    <img src="http://placehold.it/100x70" alt="product" />
                  </div>
                )}
              </div>
            </div>
            <div className="details col-md-6 d-flex flex-column">
              <h3 className="product-title">{state.product.fields.Name}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <p className="product-description">
                {state.product.fields.Beschreibung}
              </p>
              <h4 className="price">
                Price:
                <span>{" " + state.product.fields["Zielpreis (Brutto)"]}€</span>
              </h4>
              <span>
                <strong>{" " + state.product.fields["Auf Lager"] + " "}</strong>
                items available in stock
              </span>

              {Object.keys(state.selectFields).map((keyName, keyIndex) => {
                return keyName !== "undefined" ? (
                  <div key={keyIndex} className="d-flex flex-column  mb-2 mt-2">
                    <label>
                      <strong>{keyName}</strong>
                    </label>
                    <select className="form-control">
                      <Option arr={state.selectFields[keyName]} />
                    </select>
                  </div>
                ) : null;
              })}
              <div className="action">
                <button className="btn btn-success" type="button">
                  <i className="fas fa-cart-plus m-1"></i>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
