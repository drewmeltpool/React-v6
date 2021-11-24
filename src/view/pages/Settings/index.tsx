import { Form, Formik } from 'formik';
import React from 'react';
import Button from '../../components/Button';
import { Checkbox, Input } from '../../components/Form';
import Title from '../../components/Title';

import './settings.scss';

const Settings: React.FC = () => {
  return (
    <>
      <Title variant="primary" tag="h2">
        Settings
      </Title>
      <Formik
        initialValues={{ token: '', email: '' }}
        onSubmit={(_, action) => action.resetForm()}
      >
        {({ resetForm }) => (
          <Form className="form settings-form card">
            <Title variant="secondary" tag="h3">
              Take your choose
            </Title>
            <Input variant="primary" name="token" placeholder="Access token" />
            <Input
              variant="primary"
              name="token"
              placeholder="Arhive destination"
            />
            <Input
              variant="primary"
              name="token"
              placeholder="Folder destination"
            />
            <Checkbox name="email" placeholder="Get messages on my email" />
            <div className="row">
              <Button type="submit" variant="primary" text="Save" />
              <Button
                type="button"
                variant="danger"
                text="Clear"
                outline
                onClick={resetForm}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Settings;
