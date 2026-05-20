import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <aside class="w-64  bg-white border-r shadow-sm">

                <div class="p-6 border-b">
                    <h1 class="text-2xl font-bold text-green-600">
                        Solar CRM
                    </h1>

                    <p class="text-sm text-gray-500 mt-1">
                        Lead Management System
                    </p>
                </div>

                <nav class="p-4 space-y-2">

                    <div className='border p-3'>

                        <Link to={'/dashboard'}
                            class="sidebar-link">
                            Dashboard
                        </Link>

                    </div>

                    <div className='border p-3'>
                        <Link to={'/lead-add'}
                            class="sidebar-link">
                            Add Leads
                        </Link>
                    </div>

                    <div className='border p-3'>
                        <Link to={'/'}
                            class="sidebar-link">
                            List Leads
                        </Link>
                    </div>

                </nav>

            </aside>
        </div>
    )
}

export default Sidebar