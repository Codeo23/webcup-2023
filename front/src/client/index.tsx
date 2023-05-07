import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Services } from './pages/services'
import { Landing } from './pages/landing'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../core/store'
import { ThemeType } from '../core/types/theme-type'
import { toogleTheme } from '../core/slices/theme-slice'
import Book from './pages/Story/Storybook'
import './styles/client.scss'

type Props = {}

export const Client = (props: Props) => {
    const dispatch = useDispatch()
    const { theme } = useSelector<RootState>(state => state.theme) as { theme: ThemeType }

    useEffect(() => {
        if (localStorage.getItem("theme-webcup")) {
            const themeStorage = localStorage.getItem("theme-webcup") as ThemeType
            dispatch(toogleTheme(themeStorage))
            return
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme-webcup", theme);
    }, [theme])



    return (
        <main className={theme}>
            <div className='client'>
                <Routes>
                    <Route index path='/' element={<Landing />} />
                    <Route path='/services' element={<Services />} />
                    {/* <Route path='/book' element={<Book />} /> */}
                </Routes>
            </div>
        </main>
    )
}