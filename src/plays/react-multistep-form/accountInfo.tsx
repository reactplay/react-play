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
      <label>Enter Your Email address</label>
      <input
        autoFocus
        required
        type='text'
        value={email}
        onChange={(e) =>
          updateField({
            email: e.target.value,
          })
        }
      />
      <label>Enter Your password</label>
      <input
        type='text'
        value={password}
        onChange={(e) =>
          updateField({
            password: e.target.value,
          })
        }
      />
    </FormWrapper>
  );
}
