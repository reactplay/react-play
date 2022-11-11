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
      <label>Enter your address:</label>
      <input
        autoFocus
        required
        type='text'
        value={address}
        onChange={(e) => {
          updateField({ address: e.target.value });
        }}
      />
    </FormWrapper>
  );
}
