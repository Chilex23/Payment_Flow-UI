import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import { FaCheck } from "react-icons/fa";
import "./successfull.css";

const SuccessFullPayment = () => {
  const { setPersonalPage } = useContext(FlowContext);
  return (
    <div className="success-container">
      <div className="icon">
        <FaCheck />
      </div>
      <h3 className="header-3">Purchase Completed</h3>
      <p>Please check your email for details concerning this transaction.</p>
      <p className="link" onClick={setPersonalPage}>
        Return Home
      </p>
    </div>
  );
};

export default SuccessFullPayment;
