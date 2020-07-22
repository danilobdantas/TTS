import * as React from "react";
import { useState } from "react";
import { Form } from 'react-bootstrap';
import { mask as masker, unMask } from "remask";

const InputMask = ({ mask, onChange, value, ...props }) => {
  const handleChange = ev => {
    const originalValue = unMask(ev.target.value);

    onChange(originalValue);
  };

  const handleValue = masker(value, mask);

  return(<Form.Control {...props} onChange={handleChange} value={handleValue} />);
};

export default InputMask;