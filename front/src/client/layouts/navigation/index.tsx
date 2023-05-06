
import { NavigationItem } from './navigationItem'
import { routePath } from '../../constants/routePath'
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../../../core/slices/theme-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RootState } from '../../../core/store'
import { useTranslation } from 'react-i18next'
import { ThemeType } from '../../../core/types/theme-type'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

type Props = {}

const lngs = {
  fr: { nativeName: 'FR' },
  en: { nativeName: 'EN' }
};

export const Navigation = (props: Props) => {
  const dispatch = useDispatch()
  const { theme } = useSelector<RootState>(state => state.theme) as { theme: ThemeType }
  const { i18n } = useTranslation()
  
  return (
    <nav className='navigation'>
      <img src="logo/logo-white.png" alt="logo-white" className='navigation-logo' />
      <div className='navigation-lists'>
        <NavigationItem path={routePath.landing} label='ACCUEIL' />
        <NavigationItem path={routePath.services} label='SERVICES' />
        <NavigationItem path={routePath.about} label='A PROPOS' />
      </div>
      <div className='navigation-language'>
        {Object.keys(lngs).map((lng) => {
          const lang = lng as "fr" | "en"
          return (
            <button key={lng} className={i18n.resolvedLanguage === lng ? "navigation-language--active" : ""} onClick={() => i18n.changeLanguage(lng)}>{lngs[lang].nativeName}</button>
          )
        })}
        <button onClick={() => dispatch(toogleTheme())}><FontAwesomeIcon icon={theme === "theme-dark" ? faSun : faMoon} className='btn-theme' /></button>
      </div>
    </nav>
  )
}