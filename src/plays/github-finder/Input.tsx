import React from "react";

import { TextInput } from "./styles";

interface InputInterface {
  placeholder: string;
  value: string;
  onChange: any;
}

export default function Input({
  placeholder,
  value,
  onChange,
}: InputInterface) {
  return (
    <TextInput placeholder={placeholder} value={value} onChange={onChange} />
  );
}
