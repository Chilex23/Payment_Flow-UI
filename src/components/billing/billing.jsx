import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import { useForm } from "react-hook-form";
import "./billing.css";

const BillingInfo = () => {
  const { setConfirmPage } = useContext(FlowContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
    // Go to the confirm payment page
    setConfirmPage();
  };
  return (
    <form className="home-form" onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label>
          Name on Card <sup className="required">*</sup>{" "}
        </label>
        <input
          name="cardName"
          type="text"
          placeholder="Opara Linus Ahmed"
          {...register("cardName", { required: true })}
        />
        {errors.cardName?.type === "required" && (
          <p className="error">Card name is required</p>
        )}
      </div>

      <div className="form-group">
        <label>
          Card Type <sup className="required">*</sup>{" "}
        </label>
        <select name="card-type" {...register("card-type")}>
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
          <input
            name="cardDetails"
            type="text"
            placeholder="44960 44960 44960 44960"
            {...register("cardDetails", {
              required: true,
              pattern: /[^A-Z,a-z]/gi,
            })}
          />
          {errors.cardDetails?.type === "required" && (
            <p className="error">Card Number is required</p>
          )}
          {errors.cardDetails?.type === "pattern" && (
            <p className="error">Card Number must be in number format</p>
          )}
        </div>

        <div className="card-details-item card-details-item-2">
          <label>
            Expiry Date <sup className="required">*</sup>{" "}
          </label>
          <input
            name="expiryDate"
            type="tel"
            placeholder="04 / 23"
            {...register("expiryDate", {
              pattern: /\d{2}\/\d{2}/,
              required: true,
            })}
          />
          {errors.expiryDate?.type === "pattern" && (
            <p className="error">Format MM/YY</p>
          )}
          {errors.expiryDate?.type === "required" && (
            <p className="error">Expiry Date is required</p>
          )}
        </div>

        <div className="card-details-item card-details-item-3">
          <label>
            CVV <sup className="required">*</sup>{" "}
          </label>
          <input
            name="cvv"
            type="tel"
            placeholder="963"
            {...register("cvv", { required: true, pattern: /\d{3}/ })}
          />
          {errors.cvv?.type === "pattern" && (
            <p className="error">Format 963</p>
          )}
          {errors.cvv?.type === "required" && (
            <p className="error">CVV is required</p>
          )}
        </div>
      </div>

      <button className="form-button">Next</button>
      <button className="cancel-btn">Cancel Payment</button>
    </form>
  );
};
export default BillingInfo;
