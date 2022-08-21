import React, { useContext } from "react";
import PersonalInfo from "../../components/personal/personal";
import BillingInfo from "../../components/billing/billing";
import ConfirmPayment from "../../components/confirm-payment/confirm-payment";
import SuccessFullPayment from "../../components/successfull-payment/successfull-payment";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import "./home.css";

const Home = () => {
  const {
    personalPageHidden,
    paymentPageHidden,
    billingInfoHidden,
    successfullPageHidden,
    setPersonalPage,
    setBilllingPage,
    setConfirmPage,
  } = useContext(FlowContext);

  return (
    <>
      <div className="overlay"></div>
      {successfullPageHidden ? (
        <div className="form-body">
          <h1 className="header-1">Complete your purchase</h1>
          <div className="tab-container">
            <div className="tab-item" onClick={setPersonalPage}>
              <span
                className={`tab ${!personalPageHidden ? "tab-selected" : ""}`}
              >
                Personal Info
              </span>
            </div>
            <div className="tab-item" onClick={setBilllingPage}>
              <span
                className={`tab ${!billingInfoHidden ? "tab-selected" : ""}`}
              >
                Billing Info
              </span>
            </div>

            <div className="tab-item" onClick={setConfirmPage}>
              <span
                className={`tab ${!paymentPageHidden ? "tab-selected" : ""}`}
              >
                Complete Payment
              </span>
            </div>
          </div>
          {personalPageHidden ? null : <PersonalInfo />}
          {billingInfoHidden ? null : <BillingInfo />}
          {paymentPageHidden ? null : <ConfirmPayment />}
        </div>
      ) : (
        <SuccessFullPayment />
      )}
    </>
  );
};
export default Home;
