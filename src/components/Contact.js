/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="prenom"> Votre prénom : </label>
      <input
        type="text"
        placeholder="Prénom"
        {...register('prenom', {
          required: 'this is required',
          maxLength: 80,
          pattern: /([A-Z])\w+/i,
        })}
      />
      {errors.prenom && 'First name is required'}
      <br />
      <label htmlFor="nom"> Votre nom: </label>
      <input
        type="text"
        placeholder="Nom"
        {...register('nom', {
          required: true,
          maxLength: 80,
          pattern: /([A-Z])\w+/i,
        })}
      />
      {errors.nom && 'Name is required'}
      {reset}
      <br />
      <label htmlFor="email"> Votre email: </label>
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && 'Email is required'}
      {reset}
      <br />
      <label htmlFor="email"> Votre numéro de téléphone: </label>
      <input
        type="tel"
        placeholder="Mobile number"
        {...register('mobileNumber', { required: true, maxLength: 12 })}
      />
      <br />
      <label htmlFor="question"> Votre demande : </label>
      <textarea
        placeholder="Quelle est votre question ?"
        {...register('question', { required: true })}
      />
      {errors.question && 'A message is required'}
      <input type="submit" onClick={() => reset()} />
    </form>
  );
}
