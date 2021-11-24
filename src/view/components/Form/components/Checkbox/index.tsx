import { Field } from 'formik';
import React from 'react';
import Title from '../../../Title';
import './checkbox.scss';

interface ICheckbox {
  name: string;
  placeholder?: string;
}

const Checkbox: React.FC<ICheckbox> = ({ name, placeholder }) => {
  return (
    <Field name={name}>
      {() => (
        <div className="checkbox">
          <Field
            type="checkbox"
            className="custom-checkbox"
            id={name}
            name={name}
          />
          <label htmlFor={name}>
            <Title variant="info">{placeholder}</Title>
          </label>
        </div>
      )}
    </Field>
  );
};

export default Checkbox;
