import React, { useEffect, useReducer } from "react";
import Axios from "axios";
import "./product-overview.styles.css";

const initialState = {
  records: [],
  recordsLoading: false,
  recordsError: ""
};

const reducer = (state, action) => {
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
const ProductOverview = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get(
      "https://api.airtable.com/v0/appFOfImuRrfkIbgc/Produkt-Template?api_key=keyfAN0ST8IEPmunp"
    ).then((response) => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.records });
      console.log(response.data.records[2].fields.Bilder[0].url);
    });
  }, []);
  return (
    <div>
      <div className="panel panel-info">
        <div className="panel-heading">
          <div className="panel-title">
            <div className="row">
              <div className="col-xs-6">
                <h3 className="p-2">PRODUCTS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-body">
          {state.records.map((record, idx) => (
            <div
              key={idx}
              className="row product d-flex justify-content-between mb-3 p-3"
            >
              <div className="col-xs-2 d-flex">
                {record.fields.Bilder !== undefined ? (
                  <img
                    className="img-responsive"
                    src={record.fields.Bilder[0].url}
                    alt="Product"
                  />
                ) : (
                  <img
                    className="img-responsive"
                    src="http://placehold.it/100x70"
                    alt="Product"
                  />
                )}
                <div className="pl-2">
                  <h4 className="product-name">
                    <strong>{record.fields.Name}</strong>
                  </h4>
                  <div className="product-description">
                    <small>{record.fields.Beschreibung}</small>
                  </div>
                </div>
              </div>

              <div className="col-xs-6">
                <div className="col-xs-6 text-right">
                  <h6>
                    <strong>
                      {record.fields["Zielpreis (Brutto)"]}
                      <span className="text-muted">€</span>
                    </strong>
                  </h6>
                  <button type="button" className="btn btn-success">
                    Details
                  </button>
                </div>
                <div className="col-xs-4">
                  {/* <input
                        type="text"
                        className="form-control input-sm"
                        value="1"
                      /> */}
                </div>
                <div className="col-xs-2">
                  <button type="button" className="btn btn-link btn-xs">
                    <span className="glyphicon glyphicon-trash"> </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="panel-footer">
          <div className="row text-center">
            <div className="col-xs-9">
              {/* <h4 className="text-right">
                Total <strong>$50.00</strong>
              </h4> */}
            </div>
            <div className="col-xs-3">
              {/* <button type="button" className="btn btn-success btn-block">
                Checkout
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
