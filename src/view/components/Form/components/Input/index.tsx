import React from 'react';
import { Field } from 'formik';
import classNames from '../../../../../utils/classNames';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import './input.scss';

type InputVariant = 'primary';

interface IInput {
  name: string;
  variant?: InputVariant;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<IInput> = ({ name, variant, placeholder }) => {
  return (
    <Field name={name}>
      {({ meta }: any) => (
        <div
          className={classNames(
            'input',
            variant && `input--${variant}`,
            meta.error && meta.touched && 'input--error',
            !meta.error && meta.touched && 'input--success'
          )}
        >
          <Field
            className="input-value"
            name={name}
            placeholder={variant ? '' : placeholder}
          />

          {!!meta.error && meta.touched && (
            <p className="input-validation">
              <Icon icon={faExclamation} className="input-icon" />
              <span>{meta.error}</span>
            </p>
          )}
          {variant && (
            <p
              className={classNames(
                'input-placeholder',
                meta.value && 'input-placeholder--active'
              )}
            >
              {placeholder}
            </p>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input;
