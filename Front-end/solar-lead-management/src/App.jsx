import React from 'react'
import DashBoard from './pages/DashBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Leads from './pages/Leads'
import AllLeads from './pages/AllLeads'

function App() {
  return (
    <div>
      
      <BrowserRouter>

        <Routes>

          <Route path='' element={<AllLeads></AllLeads>}></Route>
          <Route path='lead-add/' element={<Leads></Leads>}></Route>
          <Route path='dashboard/' element={<DashBoard></DashBoard>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App