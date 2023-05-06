import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Client } from '../../client'

type Props = {}

export const App = (props: Props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<Client/>}/>
        </Routes>
    </BrowserRouter>
  )
}