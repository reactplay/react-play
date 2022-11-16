import React, { ReactNode } from "react";
type FormWrapperProps = {
  title: string;
  children: ReactNode;
};
export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className='form-wrapper-heading'>{title}</h2>
      <div className='form-wrapper-content-grid'>{children}</div>
    </>
  );
}
