import React from 'react'
import {UseFormRegisterReturn} from "react-hook-form"

type Props = {
    id: string,
    type: string,
    label: string,
    isPassword?: boolean,
    register? : UseFormRegisterReturn<string>,
    error? : string
}

export const Input = ({id,type,label,isPassword,register,error}: Props) => {
  return (
    <div className='input'>
      <label htmlFor={type}>{label}</label>
      <input type={type}  {...register}/>
      <p className='input-error'>{error}</p>
    </div>
  )
}