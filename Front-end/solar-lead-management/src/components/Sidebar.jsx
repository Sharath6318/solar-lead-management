import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='h-screen'>
            <aside className="w-64 h-[100%] bg-white border-r shadow-sm">

                <div class="p-6 border-b">
                    <h1 class="text-2xl font-bold text-green-600">
                        Solar CRM
                    </h1>

                    <p class="text-sm text-gray-500 mt-1">
                        Lead Management System
                    </p>
                </div>

                <nav class="p-4 space-y-2 h-screen">

                    <div className='border p-3 flex flex-col gap-1 px-3 py-3 flex-1 h-[100%]'>

                        <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                            Dashboard
                        </NavLink>

                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                            Add Leads
                        </NavLink>
                    
                        <NavLink to={'/lead-list'}
                            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                            All Leads
                        </NavLink>

                    </div>

                </nav>

            </aside>
        </div>
    )
}

export default Sidebar