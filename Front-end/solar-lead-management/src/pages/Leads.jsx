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

    const [error, setErrors] = useState({})

    function validateForm() {

        let newErrors = {}

        if (!lead.fullname.trim()) {
            newErrors.fullname = "Full name is required"
        }

        if (!lead.phone.trim()) {
            newErrors.phone = "Phone number is required"
        }
        else if (!/^[0-9]{10}$/.test(lead.phone)) {
            newErrors.phone = "Enter valid 10 digit number"
        }

        if (!lead.email.trim()) {
            newErrors.email = "Email is required"
        }

        if (!lead.location.trim()) {
            newErrors.location = "Location is required"
        }

        if (!lead.property_type) {
            newErrors.property_type = "Select property type"
        }
        if (!lead.system_size) {
            newErrors.system_size = "Select system size"
        }

        if (!lead.source) {
            newErrors.source = "Select lead source"
        }

        if (!lead.status) {
            newErrors.status = "Select lead status"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    async function handleSubmit(e) {

        e.preventDefault()

        if (!validateForm()) {

            return

        }

        try {

            console.log(lead)

            let responce = await LeadAddApi(lead)

            if (responce.status >= 200 && responce.status < 300) {

                console.log(responce.data);

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
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    />

                                    <p className="text-red-500 text-sm mt-2">
                                        {error.fullname}
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
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    />

                                    <p className="text-red-500 text-sm mt-2">
                                        {error.phone}
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
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    />


                                    <p className="text-red-500 text-sm mt-2">
                                        {error.email}
                                    </p>
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
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    />


                                    <p className="text-red-500 text-sm mt-2">
                                        {error.location}
                                    </p>
                                </div>

                                {/* Property Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Property Type
                                    </label>

                                    <select defaultValue="" onChange={(e) => setLead({ ...lead, property_type: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    >
                                        <option value="" disabled>Select Property Type</option>
                                        <option value={'residential'}>Residential</option>
                                        <option value={'commercial'}>Commercial</option>
                                        <option value={'industrial'}>Industrial</option>
                                    </select>

                                    <p className="text-red-500 text-sm mt-2">
                                        {error.property_type}
                                    </p>

                                </div>

                                {/* System Size */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Estimated System Size (kW)
                                    </label>

                                    <input onChange={(e) => setLead({ ...lead, system_size: e.target.value })}
                                        type="number"
                                        placeholder="5"
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    />

                                    <p className="text-red-500 text-sm mt-2">
                                        {error.system_size}
                                    </p>

                                </div>

                                {/* Source */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lead Source
                                    </label>

                                    <select defaultValue="" onChange={(e) => setLead({ ...lead, source: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    >

                                        <option value='' disabled>Select the Source</option>
                                        <option value={'website'}>Website</option>
                                        <option value={'referral'}>Referral</option>
                                        <option value={'walk_in'}>Walk-in</option>
                                        <option value={'social_media'}>Social Media</option>

                                    </select>


                                    <p className="text-red-500 text-sm mt-2">
                                        {error.source}
                                    </p>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lead Status
                                    </label>

                                    <select defaultValue="" onChange={(e) => setLead({ ...lead, status: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${error.fullname ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-red-500"}`}
                                    >
                                        <option value="" disabled>Select The Status</option>
                                        <option value={'new_lead'}>New Lead</option>
                                        <option value={'contacted'}>Contacted</option>
                                        <option value={'site_visit'}>Site Visit Scheduled</option>
                                        <option value={'proposal_sent'}>Proposal Sent</option>
                                        <option value={'won'}>Won</option>
                                        <option value={'lost'}>Lost</option>

                                    </select>


                                    <p className="text-red-500 text-sm mt-2">
                                        {error.status}
                                    </p>
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