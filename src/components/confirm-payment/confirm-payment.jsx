import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import "./confirm-payment.css";

const ConfirmPayment = () => {
  const { setSuccessfullPage } = useContext(FlowContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to the success page
    setSuccessfullPage();
  };
  return (
    <>
      <div className="confirm-container">
        <div className="details-header">
          <span>Item Name</span>
          <span>&#8358; Price</span>
        </div>
        <div className="details-body">
          <div className="item">
            <span>Data Science and usability</span>
            <span>50,000.00</span>
          </div>
          <div className="item">
            <span>Shipping</span>
            <span className="black">0.00</span>
          </div>
        </div>
        <div className="details-total">
          <div className="total">
            <span>Total</span>
            <span>50,000.00</span>
          </div>
        </div>
      </div>
      <button className="form-button" onClick={handleSubmit}>
        Pay
      </button>
      <button className="cancel-btn">Cancel Payment</button>
    </>
  );
};

export default ConfirmPayment;
