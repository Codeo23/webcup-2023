import React from 'react'
import { Trans } from 'react-i18next'
import { NavLink } from 'react-router-dom'

type Props = {
    path: string,
    label : string,
}

export const NavigationItem = ({path,label}: Props) => {
  return (
    <NavLink to={path} className={({isActive}) => `navigation-item ${isActive && "navigation-item--active"}`}>
        <Trans i18nKey={`navigation.${label}`}>{label}</Trans>
    </NavLink>
  )
}