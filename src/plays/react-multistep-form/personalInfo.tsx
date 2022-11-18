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
      <label>
        {" "}
        First name (*)
        <input
          className='form-input-text'
          autoFocus
          required
          type='text'
          placeholder='Your first name...'
          value={firstName}
          onChange={(e) => updateField({ firstName: e.target.value })}
        />
      </label>
      <label>
        Last name
        <input
          className='form-input-text'
          type='text'
          value={lastName}
          placeholder='Your last name...'
          onChange={(e) => updateField({ lastName: e.target.value })}
        />
      </label>
    </FormWrapper>
  );
}
