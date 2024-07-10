import React from 'react';
import { Modal, Backdrop, Fade, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 4),
    width: '500px',
    outline: 'none',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  error: {
    color: 'red',
  },
}));

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email address').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email address').required('Required'),
});

const ReferModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const navigate=useNavigate();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:5000/api/referrals', values);
      alert('Referral submitted successfully!');
      navigate("/")
      resetForm();
      handleClose();
    } catch (error) {
      alert('Error submitting referral. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Refer a Friend
          </Typography>
          <Formik
            initialValues={{
              referrerName: '',
              referrerEmail: '',
              refereeName: '',
              refereeEmail: '',
              status: 'Pending',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className={classes.form}>
                <Field
                  as={TextField}
                  label="Your Name"
                  name="referrerName"
                  variant="outlined"
                  error={touched.referrerName && !!errors.referrerName}
                  helperText={touched.referrerName && errors.referrerName}
                  required
                />
                <Field
                  as={TextField}
                  label="Your Email"
                  name="referrerEmail"
                  variant="outlined"
                  type="email"
                  error={touched.referrerEmail && !!errors.referrerEmail}
                  helperText={touched.referrerEmail && errors.referrerEmail}
                  required
                />
                <Field
                  as={TextField}
                  label="Friend's Name"
                  name="refereeName"
                  variant="outlined"
                  error={touched.refereeName && !!errors.refereeName}
                  helperText={touched.refereeName && errors.refereeName}
                  required
                />
                <Field
                  as={TextField}
                  label="Friend's Email"
                  name="refereeEmail"
                  variant="outlined"
                  type="email"
                  error={touched.refereeEmail && !!errors.refereeEmail}
                  helperText={touched.refereeEmail && errors.refereeEmail}
                  required
                />
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Fade>
    </Modal>
  );
};

export default ReferModal;
