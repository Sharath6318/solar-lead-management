import React from 'react'
import Sidebar from '../components/sidebar'

function DashBoard() {
    return (
        <div>

            {/* <!-- Layout --> */}
            <div class="flex min-h-screen">

                {/* <!-- Sidebar --> */}
                <Sidebar></Sidebar>

                {/* <!-- Main Content --> */}
                <main class="flex-1 p-6">

                    {/* <!-- Header --> */}
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-800">
                                Dashboard
                            </h2>

                            <p class="text-gray-500 mt-1">
                                Solar Lead Analytics Overview
                            </p>
                        </div>

                        <button class="primary-btn">
                            Add New Lead
                        </button>
                    </div>

                    {/* <!-- Analytics Cards --> */}
                    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                        {/* <!-- Total Leads --> */}
                        <div class="card">
                            <p class="text-sm text-gray-500">
                                Total Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2">
                                120
                            </h3>
                        </div>

                        {/* <!-- Won Leads --> */}
                        <div class="card">
                            <p class="text-sm text-gray-500">
                                Won Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-green-600">
                                30
                            </h3>
                        </div>

                        {/* <!-- Lost Leads --> */}
                        <div class="card">
                            <p class="text-sm text-gray-500">
                                Lost Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-red-500">
                                10
                            </h3>
                        </div>

                        {/* <!-- Conversion Rate --> */}
                        <div class="card">
                            <p class="text-sm text-gray-500">
                                Conversion Rate
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-blue-600">
                                25%
                            </h3>
                        </div>

                    </section>

                    {/* <!-- Lead Status Breakdown --> */}
                    <section class="card mb-8">

                        <div class="mb-6">
                            <h3 class="text-xl font-semibold text-gray-800">
                                Lead Pipeline Status
                            </h3>

                            <p class="text-gray-500 text-sm mt-1">
                                Breakdown of all lead stages
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                            <div class="status-box">
                                <h4 class="status-title">
                                    New Lead
                                </h4>

                                <p class="status-count">
                                    40
                                </p>
                            </div>

                            <div class="status-box">
                                <h4 class="status-title">
                                    Contacted
                                </h4>

                                <p class="status-count">
                                    25
                                </p>
                            </div>

                            <div class="status-box">
                                <h4 class="status-title">
                                    Site Visit
                                </h4>

                                <p class="status-count">
                                    20
                                </p>
                            </div>

                            <div class="status-box">
                                <h4 class="status-title">
                                    Proposal Sent
                                </h4>

                                <p class="status-count">
                                    15
                                </p>
                            </div>

                            <div class="status-box">
                                <h4 class="status-title">
                                    Won
                                </h4>

                                <p class="status-count text-green-600">
                                    30
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* <!-- Recent Leads --> */}
                    <section class="card">

                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800">
                                    Recent Leads
                                </h3>

                                <p class="text-gray-500 text-sm mt-1">
                                    Latest customer inquiries
                                </p>
                            </div>

                            <a href="Leads.html"
                                class="text-green-600 font-medium hover:underline">
                                View All
                            </a>
                        </div>

                        {/* <!-- Table --> */}
                        <div class="overflow-x-auto">

                            <table class="w-full text-left border-collapse">

                                <thead>
                                    <tr class="bg-gray-100">

                                        <th class="table-head">
                                            Name
                                        </th>

                                        <th class="table-head">
                                            Location
                                        </th>

                                        <th class="table-head">
                                            Property Type
                                        </th>

                                        <th class="table-head">
                                            Status
                                        </th>

                                        <th class="table-head">
                                            Date
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    <tr class="table-row">
                                        <td class="table-data">
                                            Rajesh Kumar
                                        </td>

                                        <td class="table-data">
                                            Kochi
                                        </td>

                                        <td class="table-data">
                                            Residential
                                        </td>

                                        <td class="table-data">
                                            <span class="badge badge-blue">
                                                New Lead
                                            </span>
                                        </td>

                                        <td class="table-data">
                                            20 May 2026
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-data">
                                            Priya Menon
                                        </td>

                                        <td class="table-data">
                                            Thrissur
                                        </td>

                                        <td class="table-data">
                                            Commercial
                                        </td>

                                        <td class="table-data">
                                            <span class="badge badge-yellow">
                                                Site Visit
                                            </span>
                                        </td>

                                        <td class="table-data">
                                            19 May 2026
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-data">
                                            Arun Nair
                                        </td>

                                        <td class="table-data">
                                            Calicut
                                        </td>

                                        <td class="table-data">
                                            Industrial
                                        </td>

                                        <td class="table-data">
                                            <span class="badge badge-green">
                                                Won
                                            </span>
                                        </td>

                                        <td class="table-data">
                                            18 May 2026
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>

                </main>

            </div>
        </div >
    )
}

export default DashBoard