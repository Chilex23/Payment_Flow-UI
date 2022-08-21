import React, { useContext } from "react";
import { FlowContext } from "../../provider/Flow/Flow.provider";
import { useForm } from "react-hook-form";
import "./personal.css";

const PersonalInfo = () => {
  const { setBilllingPage } = useContext(FlowContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    // Go to the billing page
    console.log(data);
    setBilllingPage();
  };

  return (
    <form className="home-form" onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label>Name</label>
        <input
          name="Name"
          type="text"
          placeholder="Opara Linus Ahmed"
          {...register("Name", { required: true })}
        />
        {errors.Name?.type === "required" && (
          <p className="error">First name is required</p>
        )}
      </div>
      <div className="form-group">
        <label>
          Email Address <sup className="required">*</sup>{" "}
        </label>
        <pre className="tip">
          The purchase receipt will be sent to this address
        </pre>
        <input
          name="email"
          type="email"
          placeholder="OparaLinusAhmed@devmail.com"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <p className="error">Email is required</p>
        )}
      </div>
      <div className="form-group">
        <label>Address 1</label>
        <input
          name="address1"
          type="text"
          placeholder="Your address"
          {...register("address1", { required: true })}
        />
        {errors.address1?.type === "required" && (
          <p className="error">Address 1 is required</p>
        )}
      </div>
      <div className="form-group">
        <label>Address 2</label>
        <input type="text" placeholder="and here" {...register("address-2")} />
      </div>

      <div className="form-group-row">
        <div className="form-group group-input">
          <label>Local Government</label>
          <input
            name="LGA"
            type="text"
            placeholder="Surulere"
            {...register("LGA", { required: true })}
          />
          {errors.LGA?.type === "required" && (
            <p className="error">Local government is required</p>
          )}
        </div>
        <div className="form-group group-select">
          <label>State</label>
          <select name="state" {...register("state")}>
            <option>Lagos</option>
            <option>Imo</option>
          </select>
        </div>
      </div>

      <button className="form-button">Next</button>
      <button className="cancel-btn">Cancel Payment</button>
    </form>
  );
};
export default PersonalInfo;
