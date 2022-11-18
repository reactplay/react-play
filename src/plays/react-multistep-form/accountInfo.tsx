import React from "react";
import { FormWrapper } from "./FormWrapper";
type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateField: (fields: Partial<AccountData>) => void;
};
export default function accountInfo({
  email,
  password,
  updateField,
}: AccountFormProps) {
  return (
    <FormWrapper title={"Account Information"}>
      <label>
        {" "}
        Email address (*)
        <input
          className='form-input-text'
          autoFocus
          required
          pattern='[^ @]*@[^ @]*'
          type='text'
          value={email}
          placeholder='a@abc.com'
          onChange={(e) =>
            updateField({
              email: e.target.value,
            })
          }
        />
      </label>
      <label>
        Password (*)
        <input
          className='form-input-text'
          type='password'
          value={password}
          placeholder='Your password...'
          onChange={(e) =>
            updateField({
              password: e.target.value,
            })
          }
        />
      </label>
    </FormWrapper>
  );
}
