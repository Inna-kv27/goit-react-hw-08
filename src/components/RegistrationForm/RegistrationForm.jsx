import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOperations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label
              htmlFor="password"
              className={styles.label}
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
