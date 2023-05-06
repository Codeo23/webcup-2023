import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationItem } from './navigationItem'
import { routePath } from '../../constants/routePath'

type Props = {}

export const Navigation = (props: Props) => {
  return (
    <nav className='navigation'>
      <img src="logo/logo-white.png" alt="logo-white" className='navigation-logo'/>
      <div className='navigation-lists'>
        <NavigationItem path={routePath.landing} label='ACCUEIL'/>
        <NavigationItem path={routePath.services} label='SERVICES'/>
        <NavigationItem path={routePath.about} label='A PROPOS'/>
      </div>
      <div className='navigation-language'>
        
      </div>
    </nav>
  )
}