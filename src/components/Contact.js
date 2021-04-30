/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import './contact-us.css';
import { TextField } from '@material-ui/core';

export default function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div id="name">
        <TextField
          id="outlined-basic1"
          label="Prénom"
          variant="outlined"
          {...register('prenom', { required: true })}
        />
        {errors.firstName && 'Surname is required'}
        <br />
        <TextField
          id="outlined-basic2"
          label="Nom"
          variant="outlined"
          {...register('Nom', { required: true })}
        />
        <br />
        <TextField
          id="outlined-basic3"
          label="Numéro de téléphone"
          variant="outlined"
          {...register('number', { required: true })}
        />
      </div>
      <br />
      <TextField
        id="outlined-basic4"
        label="Commentaire"
        variant="outlined"
        {...register('comment', { required: true })}
      />
      <br />
      <input
        style={{ marginTop: 20 }}
        type="button"
        onClick={() => reset()}
        value="Envoyer ma demande"
      />
    </form>
  );
}
