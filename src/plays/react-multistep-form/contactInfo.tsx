import React from "react";
import { FormWrapper } from "./FormWrapper";
type ContactData = {
  address: string;
};
type ContactFormProps = ContactData & {
  updateField: (fields: Partial<ContactData>) => void;
};
export default function contactInfo({
  address,
  updateField,
}: ContactFormProps) {
  return (
    <FormWrapper title={"Contact Information"}>
      <label>
        Address (*)
        <input
          className='form-input-text'
          autoFocus
          required
          type='text'
          placeholder='Your address...'
          value={address}
          onChange={(e) => {
            updateField({ address: e.target.value });
          }}
        />
      </label>
    </FormWrapper>
  );
}
