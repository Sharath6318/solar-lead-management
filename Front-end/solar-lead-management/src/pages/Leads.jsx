import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import axios from 'axios';
import { LeadAddApi } from '../services/api';

function Leads() {

    const [lead, setLead] = useState({
        "fullname": "",
        "email": "",
        "phone": "",
        "location": "",
        "property_type": "",
        "system_size": 0,
        "source": "",
        "status": ""
    })

    async function handleSubmit(e) {

        e.preventDefault()

        try {

            console.log(lead)

            const response = await LeadAddApi(lead)

            if (response.status >= 200 && response.status < 300) {

                console.log(response.data)

                alert("Lead Added Successfully")

            }

        } catch (error) {

            console.log(error)

            alert("Something went wrong")
        }
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex">

                {/* Sidebar */}
                <Sidebar></Sidebar>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-8 overflow-y-auto">

                    {/* Page Container */}
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        {/* <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">
                                        Leads Management
                                    </h1>

                                    <p className="text-gray-500 mt-2">
                                        Manage customer inquiries and sales pipeline
                                    </p>
                                </div>

                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                                >
                                    + Add Lead
                                </button>

                            </div>

                        </div> */}

                        {/* Add Lead Form */}
                        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">

                            {/* Section Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Add New Lead
                                </h2>

                                <p className="text-sm text-gray-500 mt-2">
                                    Fill all required customer details
                                </p>
                            </div>

                            {/* Form Grid */}
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>

                                    <input
                                        onChange={(e) => setLead({ ...lead, fullname: e.target.value })}
                                        type="text"
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />

                                    <p className="text-red-500 text-sm mt-2">
                                        Full name is required
                                    </p>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>

                                    <input
                                        onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                                        type="text"
                                        placeholder="9876543210"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />

                                    <p className="text-red-500 text-sm mt-2">
                                        Enter valid 10-digit phone number
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>

                                    <input
                                        onChange={(e) => setLead({ ...lead, email: e.target.value })}
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Location / City *
                                    </label>

                                    <input
                                        onChange={(e) => setLead({ ...lead, location: e.target.value })}
                                        type="text"
                                        placeholder="Enter city"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />
                                </div>

                                {/* Property Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Property Type
                                    </label>

                                    <select onChange={(e) => setLead({ ...lead, property_type: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    >
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Industrial</option>
                                    </select>
                                </div>

                                {/* System Size */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Estimated System Size (kW)
                                    </label>

                                    <input onChange={(e) => setLead({ ...lead, system_size: e.target.value })}
                                        type="number"
                                        placeholder="5"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />
                                </div>

                                {/* Source */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lead Source
                                    </label>

                                    <select onChange={(e) => setLead({ ...lead, source: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    >
                                        <option>Website</option>
                                        <option>Referral</option>
                                        <option>Walk-in</option>
                                        <option>Social Media</option>
                                    </select>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lead Status
                                    </label>

                                    <select onChange={(e) => setLead({ ...lead, status: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    >
                                        <option>New Lead</option>
                                        <option>Contacted</option>
                                        <option>Site Visit Scheduled</option>
                                        <option>Proposal Sent</option>
                                        <option>Won</option>
                                        <option>Lost</option>
                                    </select>
                                </div>

                                {/* Button */}
                                <div className="md:col-span-2 flex justify-end gap-4 pt-4">

                                    <button
                                        type="button"
                                        className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                                    >
                                        Save Lead
                                    </button>

                                </div>

                            </form>

                        </section>

                    </div>

                </main>

            </div>
        </div>
    )
}

export default Leads