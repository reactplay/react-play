import React from "react";
import { FormWrapper } from "./FormWrapper";

type PersonalData = {
  firstName: string;
  lastName: string;
};
type PersonalFormProps = PersonalData & {
  updateField: (fields: Partial<PersonalData>) => void;
};
export default function personalInfo({
  firstName,
  lastName,
  updateField,
}: PersonalFormProps) {
  return (
    <FormWrapper title={"Personal Information"}>
      <label>Enter your first name:</label>
      <input
        autoFocus
        required
        type='text'
        value={firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
      />
      <label>Enter your last name:</label>
      <input
        type='text'
        value={lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
      />
    </FormWrapper>
  );
}
