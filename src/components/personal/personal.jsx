import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import "./personal.css";

const PersonalInfo = () => {
  const { setBilllingPage } = useContext(FlowContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to the billing page
    setBilllingPage();
  }
  return (
    <form className="home-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>
          Email Address <sup className="required">*</sup>{" "}
        </label>
        <pre className="tip">
          The purchase receipt will be sent to this address
        </pre>
        <input type="e-mail" />
      </div>
      <div className="form-group">
        <label>Address 1</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Address 2</label>
        <input type="text" />
      </div>

      <div className="form-group-row">
        <div className="form-group group-input">
          <label>Local Government</label>
          <input type="text" />
        </div>
        <div className="form-group group-select">
          <label>State</label>
          <select>
            <option>Lagos</option>
            <option>Imo</option>
          </select>
        </div>
      </div>

      <button className="form-button" onClick={handleSubmit}>Next</button>
      <button className="cancel-btn">Cancel Payment</button>
    </form>
  );
}
export default PersonalInfo;
