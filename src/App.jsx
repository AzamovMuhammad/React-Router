import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inbox from './pages/Inbox'
import Starred from './pages/Starred'
import Snoozed from './pages/Snoozed'
import Sent from './pages/Sent'
import Drafts from './pages/Drafts'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inbox/>}></Route>
          <Route path='/starred' element={<Starred/>}></Route>
          <Route path='/snoozed' element={<Snoozed/>}></Route>
          <Route path='/sent' element={<Sent/>}></Route>
          <Route path='/drafts' element={<Drafts/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App