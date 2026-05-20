import React from 'react'
import Sidebar from '../components/sidebar'

function AllLeads() {
    return (
        <div>
            <div className='m-10'>

                <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Filter Leads
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Search and filter leads quickly
                            </p>
                        </div>

                        <button
                            className="px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
                        >
                            Reset Filters
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Lead Status
                            </label>

                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                            >
                                <option>All Status</option>
                                <option>New Lead</option>
                                <option>Contacted</option>
                                <option>Won</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Start Date
                            </label>

                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                End Date
                            </label>

                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Location
                            </label>

                            <input
                                type="text"
                                placeholder="Search city..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                            />
                        </div>

                    </div>

                </section>

                {/* all Leads */}
                <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                    {/* Table Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                All Leads
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Complete lead pipeline management
                            </p>
                        </div>

                        <input
                            type="text"
                            placeholder="Search leads..."
                            className="w-full md:w-72 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                        />

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200">

                        <table className="w-full text-left">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Name
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Contact
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Location
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Property
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Actions
                                    </th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-gray-200">

                                <tr className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-5 font-medium text-gray-800">
                                        Rajesh Kumar
                                    </td>

                                    <td className="px-6 py-5 text-gray-600">
                                        9876543210
                                    </td>

                                    <td className="px-6 py-5 text-gray-600">
                                        Kochi
                                    </td>

                                    <td className="px-6 py-5 text-gray-600">
                                        Residential
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                            New Lead
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex gap-2">

                                            <button className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition">
                                                View
                                            </button>

                                            <button className="px-3 py-2 rounded-lg bg-yellow-100 text-yellow-700 text-sm font-medium hover:bg-yellow-200 transition">
                                                Edit
                                            </button>

                                            <button className="px-3 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition">
                                                Delete
                                            </button>

                                        </div>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default AllLeads