import React from 'react';
import { FormWrapper } from './FormWrapper';
type ContactData = {
  address: string;
};
type ContactFormProps = ContactData & {
  updateField: (fields: Partial<ContactData>) => void;
};

export default function contactInfo({ address, updateField }: ContactFormProps) {
  return (
    <FormWrapper title="Contact Information">
      <label>
        Address (*)
        <input
          autoFocus
          required
          className="form-input-text"
          placeholder="Your address..."
          type="text"
          value={address}
          onChange={(e) => {
            updateField({ address: e.target.value });
          }}
        />
      </label>
    </FormWrapper>
  );
}
