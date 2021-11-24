import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Input } from '../../components/Form';
import Button from '../../components/Button';
import Notification from '../../components/Notification';
import { useToast } from '../../../hooks/useToast';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../components/Image';
import signUpImage from '../../../assets/images/sign-up.svg';
import Title from '../../components/Title';
import Text from '../../components/Text';
import './signUp.scss';

const SignUp: React.FC = () => {
  const { push } = useToast();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        userName: '',
        password: '',
      }}
      validationSchema={yup.object({
        email: yup.string().email().required(),
        userName: yup.string().required(),
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
        <div className="sign-form-outter">
          <Form className="form sign-form card">
            <Title variant="secondary">Sign up</Title>
            <Input placeholder="Email" variant="primary" name="email" />
            <Input placeholder="User name" variant="primary" name="userName" />
            <Input placeholder="Password" variant="primary" name="password" />
            <Button type="submit" variant="primary" text="Sign up" />

            <Text>
              Already have account? &nbsp;
              <Link className="link" to="/sign-in">
                Sign in
              </Link>
            </Text>
          </Form>
          <Image className="sign-image" src={signUpImage} />
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
