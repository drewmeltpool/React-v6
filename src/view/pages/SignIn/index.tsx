import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Input } from '../../components/Form';
import Button from '../../components/Button';
import Notification from '../../components/Notification';
import { useToast } from '../../../hooks/useToast';
import { useNavigate } from 'react-router-dom';

import './signIn.scss';
import Title from '../../components/Title';

const SignIn: React.FC = () => {
  const { push } = useToast();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
      })}
      onSubmit={(_, action) => {
        push((id) => (
          <Notification
            type="success"
            text="User successfully created"
            id={id}
          />
        ));
        navigate('/admin');
        action.resetForm();
      }}
    >
      {() => (
        <div className="sign-form-outter sign-in-wrapper">
          <Form className="form sign-form card">
            <Title variant="secondary">Sign in</Title>
            <Input placeholder="Email" variant="primary" name="email" />
            <Input
              placeholder="Password"
              type="password"
              variant="primary"
              name="password"
            />
            <Button type="submit" outline variant="primary" text="Sign in" />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;
