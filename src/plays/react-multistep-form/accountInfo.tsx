import React from 'react';
import { FormWrapper } from './FormWrapper';
type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateField: (fields: Partial<AccountData>) => void;
};

export default function accountInfo({ email, password, updateField }: AccountFormProps) {
  return (
    <FormWrapper title="Account Information">
      <label>
        {' '}
        Email address (*)
        <input
          autoFocus
          required
          className="form-input-text"
          pattern="[^ @]*@[^ @]*"
          placeholder="a@abc.com"
          type="text"
          value={email}
          onChange={(e) =>
            updateField({
              email: e.target.value
            })
          }
        />
      </label>
      <label>
        Password (*)
        <input
          className="form-input-text"
          placeholder="Your password..."
          type="password"
          value={password}
          onChange={(e) =>
            updateField({
              password: e.target.value
            })
          }
        />
      </label>
    </FormWrapper>
  );
}
