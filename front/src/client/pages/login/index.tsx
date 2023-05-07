import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from '../components/input'
import { FormData, schema } from './schema'
import { Auth } from '../../layouts/auth';

type Props = {
  isOpen: boolean,
  closeModal: () => void,
}

export const Login = ({ isOpen, closeModal }: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Auth isOpen={isOpen} closeModal={closeModal}>
      <h1 className='auth-logo'>Codeo.</h1>
      <p>Let's login to codeo<br /> account first</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id='email' type='email' label='Email' register={register("email")} error={errors?.email?.message} />
        <Input id='password' type='password' label='Password' isPassword register={register("password")} error={errors?.password?.message} />
        <div className='auth-actions'>
          <div className='input-checkbox'>
            {/* <input type='checkbox' id='remember' />
                      <label htmlFor='remember'>Remember me</label> */}
          </div>
          <button>Mot de passe oublié</button>
        </div>
      </form>
      <button className='auth-btn'>Se connecter</button>
      <p className='switch-btn'>Vous n'avez pas encore un compte? <button>S'inscrire</button></p>
    </Auth>
  )
}