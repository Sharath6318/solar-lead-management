import React from 'react'
import DashBoard from './pages/DashBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Leads from './pages/Leads'
import AllLeads from './pages/AllLeads'
import LeadEdit from './pages/LeadEdit'

function App() {
  return (
    <div>
      
      <BrowserRouter>

        <Routes>

          <Route path='lead-list/' element={<AllLeads></AllLeads>}></Route>
          <Route path='' element={<Leads></Leads>}></Route>
          <Route path='lead-add/' element={<Leads></Leads>}></Route>
          <Route path='dashboard/' element={<DashBoard></DashBoard>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App