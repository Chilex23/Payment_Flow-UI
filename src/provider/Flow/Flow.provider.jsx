import React, { createContext, useState } from "react";

export const FlowContext = createContext({
  personalPageHidden: false,
  billingInfoHidden: true,
  paymentPageHidden: true,
  successfullPageHidden: true,
  setPersonalPage: () => {},
  setBilllingPage: () => {},
  setConfirmPage: () => {},
  setSuccessfullPage: () => {},
});

const FlowProvider = ({ children }) => {
  const [personalPageHidden, setPersonalPageHidden] = useState(false);
  const [billingInfoHidden, setBillingInfoHidden] = useState(true);
  const [paymentPageHidden, setPaymentPageHidden] = useState(true);
  const [successfullPageHidden, setSuccessfullPageHidden] = useState(true);

  const setPersonalPage = () => {
    setPersonalPageHidden(false);
    setBillingInfoHidden(true);
    setPaymentPageHidden(true);
    setSuccessfullPageHidden(true);
  };

  const setBilllingPage = () => {
    setBillingInfoHidden(false);
    setPersonalPageHidden(true);
    setPaymentPageHidden(true);
    setSuccessfullPageHidden(true);
  };

  const setConfirmPage = () => {
    setPaymentPageHidden(false);
    setBillingInfoHidden(true);
    setPersonalPageHidden(true);
    setSuccessfullPageHidden(true);
  };

  const setSuccessfullPage = () => {
    setSuccessfullPageHidden(false);
    setPaymentPageHidden(true);
    setBillingInfoHidden(true);
    setPersonalPageHidden(true);
  };

  return (
    <FlowContext.Provider
      value={{
        paymentPageHidden,
        personalPageHidden,
        billingInfoHidden,
        successfullPageHidden,
        setPersonalPage,
        setBilllingPage,
        setConfirmPage,
        setSuccessfullPage,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export default FlowProvider;
