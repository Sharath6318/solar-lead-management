import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { ListleadAPi } from '../services/api'
import { Link } from 'react-router-dom'

function DashBoard() {

    const [leads, setLeads] = useState()

    useEffect(() => { LeadDetails() }, [])

    async function LeadDetails() {

        let response = await ListleadAPi()

        if (response.status >= 200 && response.status < 300) {

            setLeads(response.data)

        }
    }

    return (
        <div>
            {/* <!-- Layout --> */}
            <div class="flex min-h-screen">

                {/* <!-- Sidebar --> */}
                <Sidebar></Sidebar>

                {/* <!-- Main Content --> */}
                <main class="flex-1">

                    {/* <!-- Header --> */}
                    <div class="flex justify-between items-center mb-3  bg-white px-6 h-[70px] shadow-lg">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-800">
                                Dashboard
                            </h2>

                            <p class="text-gray-500 mt-1">
                                Solar Lead Analytics Overview
                            </p>
                        </div>

                        <Link to={'/'} className="w-[150px] p-2 bg-blue-900 rounded-md font-medium hover:text-white shadow-lg transition duration-200 ">
                            Add New Lead
                        </Link>
                    </div>

                    {/* <!-- Analytics Cards --> */}
                    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 p-5  ">

                        {/* <!-- Total Leads --> */}
                        <div className="flex flex-col w-[250px] h-[120px] items-center justify-center bg-white rounded-2xl shadow-md">
                            <p class="text-xl text-gray-500">
                                Total Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2">
                                120
                            </h3>
                        </div>

                        {/* <!-- Won Leads --> */}
                        <div className="flex flex-col w-[250px] h-[120px] items-center justify-center bg-white rounded-2xl shadow-md">
                            <p class="text-xl text-gray-500">
                                Won Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-green-600">
                                30
                            </h3>
                        </div>

                        {/* <!-- Lost Leads --> */}
                        <div className="flex flex-col w-[250px] h-[120px] items-center justify-center bg-white rounded-2xl shadow-md">
                            <p class="text-xl text-gray-500">
                                Lost Leads
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-red-500">
                                10
                            </h3>
                        </div>

                        {/* <!-- Conversion Rate --> */}
                        <div className="flex flex-col w-[250px] h-[120px] items-center justify-center bg-white rounded-2xl shadow-md">
                            <p class="text-xl text-gray-500">
                                Conversion Rate
                            </p>

                            <h3 class="text-3xl font-bold mt-2 text-blue-600">
                                25%
                            </h3>
                        </div>

                    </section>

                    {/* <!-- Lead Status Breakdown --> */}
                    <section class="card mb-5 px-5">

                        <div class="mb-4">
                            <h3 class="text-xl font-semibold text-gray-800">
                                Lead Pipeline Status
                            </h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">

                            <div className="flex flex-col w-[220px] h-[100px] items-center justify-center bg-white rounded-2xl shadow-md">
                                <h4 className="status-title text-md font-medium">
                                    New Lead
                                </h4>

                                <p class="status-count font-bold">
                                    40
                                </p>
                            </div>

                            <div className="flex flex-col w-[220px] h-[100px] items-center justify-center bg-white rounded-2xl shadow-md">
                                <h4 class="status-title font-medium text-md">
                                    Contacted
                                </h4>

                                <p class="status-count font-bold">
                                    25
                                </p>
                            </div>

                            <div className="flex flex-col w-[220px] h-[100px] items-center justify-center bg-white rounded-2xl shadow-md">
                                <h4 class="status-title font-medium text-md">
                                    Site Visit
                                </h4>

                                <p class="status-count font-bold">
                                    20
                                </p>
                            </div>

                            <div className="flex flex-col w-[220px] h-[100px] items-center justify-center bg-white rounded-2xl shadow-md">
                                <h4 class="status-title font-medium text-md">
                                    Proposal Sent
                                </h4>

                                <p className="status-count font-bold">
                                    15
                                </p>
                            </div>

                            <div className="flex flex-col w-[220px] h-[100px] items-center justify-center bg-white rounded-2xl shadow-md">
                                <h4 class="status-title font-medium text-lg">
                                    Won
                                </h4>

                                <p class="status-count text-green-600 font-extrabold">
                                    30
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* <!-- Recent Leads --> */}
                    <section class="card px-5">

                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800">
                                    Recent Leads
                                </h3>
                            </div>

                            <Link to={'/lead-list'}
                                className="text-green-600 p-1 w-[100px] text-center font-medium bg-blue-700 text-white shadow-md rounded-md hover:underline ">
                                View All
                            </Link>
                        </div>

                        {/* <!-- Table --> */}
                        <div class="overflow-x-auto">

                            <table class="w-full text-center border-collapseborder border-gray-200 rounded-xl overflow-hidden">

                                <thead>
                                    <tr class="bg-gray-100">

                                        <th class="table-head border border-gray-300 ">
                                            Name
                                        </th>

                                        <th class="table-head border border-gray-300 px-4 py-2">
                                            Location
                                        </th>

                                        <th class="table-head border border-gray-300 px-4 py-2">
                                            Property Type
                                        </th>

                                        <th class="table-head border border-gray-300 px-4 py-2">
                                            Status
                                        </th>

                                        <th class="table-head border border-gray-300 px-4 py-2">
                                            Date
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        leads?.slice(0, 5).map((lead, i) => {

                                            return (

                                                <tr key={i} className="table-row">

                                                    <td className="table-data border border-gray-300 px-4 py-2 font-semibold text-sm uppercase">
                                                        {lead.fullname}
                                                    </td>

                                                    <td className="table-data border border-gray-300 px-4 py-2">
                                                        {lead.location}
                                                    </td>

                                                    <td className="table-data border border-gray-300 px-4 py-2">
                                                        {lead.property_type}
                                                    </td>

                                                    <td className="table-data border border-gray-300 px-4 py-2">

                                                        <span className="badge badge-blue">
                                                            {lead.status}
                                                        </span>

                                                    </td>

                                                    <td className="table-data border border-gray-300 px-4 py-2">
                                                        20 May 2026
                                                    </td>

                                                </tr>

                                            )

                                        })
                                    }



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