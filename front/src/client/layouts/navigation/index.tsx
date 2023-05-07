
import { NavigationItem } from './navigationItem'
import { routePath } from '../../constants/routePath'
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../../../core/slices/theme-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RootState } from '../../../core/store'
import { useTranslation } from 'react-i18next'
import { ThemeType } from '../../../core/types/theme-type'
import { faBars, faClose, faList, faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { motion } from "framer-motion"
import {Trans} from "react-i18next"

type Props = {
  viewTheme?: boolean
}

const lngs = {
  fr: { nativeName: 'FR' },
  en: { nativeName: 'EN' }
};

export const Navigation = ({viewTheme = true }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleClickButton = () => setShowMenu((current) => !current);
  const dispatch = useDispatch()
  const { theme } = useSelector<RootState>(state => state.theme) as { theme: ThemeType }
  const { i18n } = useTranslation()

  return (
    <nav className='navigation'>
      <div className='navigation-content'>
        <img src="logo/logo-white.png" alt="logo-white" className='navigation-logo' />
        <div className='navigation-lists'>
          <NavigationItem path={routePath.landing} label='home' />
          <NavigationItem path={routePath.services} label='services' />
          <NavigationItem path={routePath.book} label='history' />
        </div>
        <div className='navigation-language'>
          {Object.keys(lngs).map((lng) => {
            const lang = lng as "fr" | "en"
            return (
              <button key={lng} className={i18n.resolvedLanguage === lng ? "navigation-language--active" : ""} onClick={() => i18n.changeLanguage(lng)}>{lngs[lang].nativeName}</button>
            )
          })}
          {viewTheme && <button onClick={() => dispatch(toogleTheme())}><FontAwesomeIcon icon={theme === "theme-dark" ? faSun : faMoon} className='btn-theme' /></button>}
        </div>

        <button className='btn-menu' onClick={toggleClickButton}><FontAwesomeIcon icon={faBars} color="white" size="xl" /></button>
        <div className={`navigation-small ${!showMenu && "hide"}`}>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleClickButton}
          >
            <FontAwesomeIcon icon={faClose} color="white" size="xl" />
          </motion.div>
          <NavigationItem path={routePath.landing} label='ACCUEIL' />
          <NavigationItem path={routePath.services} label='SERVICES' />
          <NavigationItem path={routePath.book} label='A PROPOS' />

          {Object.keys(lngs).map((lng) => {
            const lang = lng as "fr" | "en"
            return (
              <button key={lng} className={i18n.resolvedLanguage === lng ? "navigation-language--active" : ""} onClick={() => i18n.changeLanguage(lng)}>{lngs[lang].nativeName}</button>
            )
          })}
          <button onClick={() => dispatch(toogleTheme())}><FontAwesomeIcon icon={theme === "theme-dark" ? faSun : faMoon} className='btn-theme' /></button>
        </div>
      </div>
    </nav>
  )
}