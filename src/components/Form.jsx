import React, { useState, useEffect } from "react";
import Step2 from "./FormSteps/Step2";
import Step1 from "./FormSteps/Step1";
import Step3 from "./FormSteps/Step3";
import Navigation from "./Navigations";
import StepNavigation from "./StepNavigation";
import { useFormHook } from "../context/FormProvider";
import { IoCloseSharp } from "react-icons/io5";

const Form = () => {
  const { isOpen, handleClose } = useFormHook();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(() => {
    // getting data from the localStorage
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        };
  });

  const [errors, setErrors] = useState({});

  // setting the data to localstorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // validate form data
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular expression to check email is correct or not.
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (step === 2) {
      if (!formData.address1)
        tempErrors.address1 = "Address Line 1 is required";
      if (!formData.city) tempErrors.city = "City is required";
      if (!formData.state) tempErrors.state = "State is required";
      if (!formData.zip) tempErrors.zip = "Zip Code is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  // fumction to next step
  const nextStep = () => {
    if (validate()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  // function to pervious step
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // function to change the value and using input field
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // hanlde submit with the api call with settimeOut
  const handleSubmit = async () => {
    try {
      if (validate) {
        localStorage.setItem("formData", JSON.stringify(formData));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted", formData);
        handleClose();
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  };
  return (
    <div
      className={`fixed inset-0  overflow-hidden flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg transition-opacity duration-300 ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none z-0"
      }`}
    >
      <div
        className="relative w-full lg:w-3/6 xl:w-2/5 mx-auto md:w-4/6 h-full lg:h-auto   p-3 rounded-lg shadow-lg  bg-white overflow-auto 
    "
      >
        {/* close button icon */}
        <button
          onClick={handleClose}
          className="text-red-500   cursor-pointer absolute top-1 right-1"
        >
          <IoCloseSharp size={30} onClick={handleClose} />
        </button>
        {/* main form components */}
        <div
          className={`translate duration-300 h-full
             ${isOpen ? "translate-y-0" : "translate-y-full"}
             ${isOpen ? "opacity-100" : "opacity-0"}
             `}
        >
          <StepNavigation step={step} />
          {step === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          )}
          {step === 3 && <Step3 formData={formData} />}
          <Navigation
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
