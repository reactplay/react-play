import React from "react";
import { useMultistepForm } from "./customHook/useMultistepForm";
import PersonalInfo from "./personalInfo";
import ContactInfo from "./contactInfo";
import AccountInfo from "./accountInfo";
import { FormEvent, useState } from "react";
type FormData = {
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  password: string,
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
};

function ReactMultistepForm() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    isLastStep,
    isFirstStep,
    currentStepIndex,
    step,
    next,
    back,
    totalSteps,
    goTo,
  } = useMultistepForm([
    <PersonalInfo {...data} updateField={updateFields} />,
    <>Nepal</>,
    <ContactInfo {...data} updateField={updateFields} />,
    <AccountInfo {...data} updateField={updateFields} />,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("submit the form");
  };
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          position: "relative",
          background: "white",
          padding: "1rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", top: "2px", right: ".5rem" }}>
            {currentStepIndex + 1}/{totalSteps}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type={"button"} onClick={back}>
                Back
              </button>
            )}

            <button type={"submit"}>{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReactMultistepForm;
