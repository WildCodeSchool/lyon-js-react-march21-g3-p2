/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import './contact-us.css';
// eslint-disable-next-line import/no-unresolved
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function Form() {
  // eslint-disable-next-line prettier/prettier
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line no-alert
  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/contact`, data)
      .then(() => {
        // eslint-disable-next-line no-alert
        window.alert('Votre message a bien été envoyé');
      });
  };

  console.log(errors);

  return (
    <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <div id="name">
        <TextField
          id="outlined-basic1"
          label="Prénom"
          variant="outlined"
          {...register('firstname', { required: true })}
        />
        {errors.prenom && 'First name is required'}
        <br />
        <TextField
          id="outlined-basic2"
          label="Nom"
          variant="outlined"
          {...register('lastname', { required: true })}
        />
        {errors.Nom && 'Last name is required'}
        <br />
        <TextField
          id="outlined-basic3"
          label="Numéro de téléphone"
          variant="outlined"
          {...register('phonenumber', { required: true })}
        />
        {errors.number && 'Phone number is required'}
      </div>
      <br />
      <TextField
        id="outlined-basic4"
        label="Commentaire"
        variant="outlined"
        {...register('comment', { required: false })}
      />
      {errors.comment && 'Comment is required'}
      <br />
      <input style={{ marginTop: 20 }} type="submit" value="Send" />
    </form>
  );
}
