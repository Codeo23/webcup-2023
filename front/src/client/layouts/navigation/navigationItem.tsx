import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    path: string,
    label : string,
}

export const NavigationItem = ({path,label}: Props) => {
  return (
    <NavLink to={path} className={({isActive}) => `navigation-item ${isActive && "navigation-item--active"}`}>
        {label}
    </NavLink>
  )
}