import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import "./billing.css";

const BillingInfo = () => {
  const { setConfirmPage } = useContext(FlowContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Go to the confirm payment page
    setConfirmPage();
  }
  return (
    <form className="home-form">
      <div className="form-group">
        <label>
          Name on Card <sup className="required">*</sup>{" "}
        </label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>
          Card Type <sup className="required">*</sup>{" "}
        </label>
        <select>
          <option>Visa</option>
          <option>Verve</option>
          <option>MasterCard</option>
        </select>
      </div>

      <div className="card-details">
        <div className="card-details-item card-details-item-1">
          <label>
            Card Details <sup className="required">*</sup>{" "}
          </label>
          <input type="text" />
        </div>

        <div className="card-details-item card-details-item-2">
          <label>
            Expiry Date <sup className="required">*</sup>{" "}
          </label>
          <input type="text" />
        </div>

        <div className="card-details-item card-details-item-3">
          <label>
            CVV <sup className="required">*</sup>{" "}
          </label>
          <input type="text" />
        </div>
      </div>

      <button className="form-button" onClick={handleSubmit}>
        Next
      </button>
      <button className="cancel-btn">Cancel Payment</button>
    </form>
  );
};
export default BillingInfo;
