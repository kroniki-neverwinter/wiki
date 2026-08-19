import React from "react";

export default function TextInput({
  id,
  name = id,
  type = "text",
  maxLength,
  required = false,
  readOnly = false,
  value,
  min,
  max,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      min={min}
      max={max}
      maxLength={maxLength}
      required={required}
      readOnly={readOnly}
      value={value}
    />
  );
}
