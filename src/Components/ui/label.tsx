import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => (
  <label {...props} className="block font-medium text-gray-700">
    {children}
  </label>
);
