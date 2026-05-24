import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { GetFilterDataApi, getLeadApi, ListleadAPi, UpdateLeadApi } from '../services/api'
import axios from 'axios'
import { data, useParams } from 'react-router-dom'

function AllLeads() {

    const [leads, setLeads] = useState()

    const [open, setOpen] = useState(false)
    
    const [getfilterLead, setFilterLead] = useState(
        {
            "lead_status": "",
            "start_date": "",
            "end_date": "",
            "location": ""
        }
    )
    
    useEffect(() => {LeadFilter()}, [getfilterLead])


    const [getLead, setgetLead] = useState(
        {
            "fullname": "",
            "email": "",
            "phone": "",
            "location": "",
            "property_type": "",
            "system_size": 0,
            "source": "",
            "status": ""
        }
    )

    const [updateLeads, setupdateLead] = useState()

    useEffect(() => { LeadDetails() }, [])

    async function LeadDetails() {

        let response = await ListleadAPi()

        if (response.status >= 200 && response.status < 300) {

            setLeads(response.data)

        }
    }

    async function LeadRetrive(id) {

        let response = await getLeadApi(id)

        setgetLead(response.data)
    }

    async function UpdateNewLead(e) {

        e.preventDefault()

        try {

            let resonse = await UpdateLeadApi(updateLeads.id, updateLeads)

            if (resonse.status >= 200 && resonse.status < 300) {

                // console.log(resonse.data);

                LeadDetails()

                setOpen(false)

            }

        }

        catch (error) {

            console.log("Error : ", error.message);

        }

    }

    async function LeadFilter() {

        // console.log(getfilterLead);

        try{

            let response = await GetFilterDataApi(getfilterLead)

            console.log(response.data)

            setLeads(response.data)

        }

        catch (error) {

            console.log("Error : ", error);
            
        }
        
    }

    return (
        <div className='flex'>
            {open && (

                <div className='flex items-center justify-center min-h-screen fixed inset-0 bg-black/40'>

                    <div className='w-[500px] h-[500px] border border-black bg-black '>

                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                            <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">

                                <h1 className="text-2xl font-semibold mb-5">
                                    Edit Lead
                                </h1>

                                <form onSubmit={UpdateNewLead} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>

                                        <input className='p-3 border border-black'
                                            value={getLead.fullname}
                                            onChange={(e) => setupdateLead({ ...getLead, fullname: e.target.value })}
                                            type="text"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>

                                        <input

                                            className='p-3  border border-black'
                                            onChange={(e) => setupdateLead({ ...getLead, phone: e.target.value })}
                                            type="text"
                                            value={getLead.phone}
                                        />

                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>

                                        <input
                                            className='p-3 border border-black'
                                            onChange={(e) => setupdateLead({ ...getLead, email: e.target.value })}
                                            type="email"
                                            value={getLead.email}
                                        />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Location / City *
                                        </label>

                                        <input
                                            className='p-3 border border-black'
                                            onChange={(e) => setupdateLead({ ...getLead, location: e.target.value })}
                                            type="text"
                                        />
                                    </div>

                                    {/* Property Type */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Property Type
                                        </label>

                                        <select className='p-3 border border-black' defaultValue={getLead.property_type} onChange={(e) => setupdateLead({ ...getLead, property_type: e.target.value })}
                                        >
                                            <option value={'residential'}>Residential</option>
                                            <option value={'commercial'}>Commercial</option>
                                            <option value={'industrial'}>Industrial</option>
                                        </select>


                                    </div>

                                    {/* System Size */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Estimated System Size (kW)
                                        </label>

                                        <input className='p-3 border border-black' onChange={(e) => setupdateLead({ ...getLead, system_size: e.target.value })}
                                            type="number"
                                            value={getLead.system_size}
                                        />

                                    </div>

                                    {/* Source */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Lead Source
                                        </label>

                                        <select className='p-3 border border-black' defaultValue={setLeads.source} onChange={(e) => setupdateLead({ ...getLead, source: e.target.value })}
                                        >

                                            <option value={'website'}>Website</option>
                                            <option value={'referral'}>Referral</option>
                                            <option value={'walk_in'}>Walk-in</option>
                                            <option value={'social_media'}>Social Media</option>

                                        </select>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Lead Status
                                        </label>

                                        <select className='p-3 border border-black' defaultValue={setLeads.status} onChange={(e) => setupdateLead({ ...getLead, status: e.target.value })}
                                        >
                                            <option value={'new_lead'}>New Lead</option>
                                            <option value={'contacted'}>Contacted</option>
                                            <option value={'site_visit'}>Site Visit Scheduled</option>
                                            <option value={'proposal_sent'}>Proposal Sent</option>
                                            <option value={'won'}>Won</option>
                                            <option value={'lost'}>Lost</option>

                                        </select>

                                    </div>

                                    {/* Button */}
                                    <div className="md:col-span-2 flex justify-end gap-4 pt-4">

                                        <button
                                            type="button" onClick={() => setOpen(false)}
                                            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition "
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

                            </div>

                        </div>

                        <button className='border border-white bg-red-800' onClick={() => setOpen(false)}>Cancle</button>
                    </div>
                </div>
            )}

            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='m-5 w-[100%]'>

                {/*------------------- Filter Section-------------- */}
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

                        <button onClick={() => window.location.reload()}
                            className="px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
                        >
                            Reset Filters
                        </button>

                    </div>


                    <form>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Lead Status
                                </label>

                                <select
                                onChange={(e) => setFilterLead({...getfilterLead, lead_status : e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50">
                                    <option defaultValue={''}>All Status</option>
                                    <option value={'new_lead'}>New Lead</option>
                                    <option value={'contacted'}>Contacted</option>
                                    <option value={'contacted'}>Won</option>
                                    <option value={'site_visit'}>Site Visit Scheduled</option>
                                    <option value={'proposal_sent'}>Proposal Sent</option>
                                    <option value={'lost'}>lost</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Start Date
                                </label>

                                <input onChange = {(e) => setFilterLead({...getfilterLead, start_date : e.target.value})} type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50" />

                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    End Date
                                </label>

                                <input onChange = {(e) => setFilterLead({...getfilterLead, end_date : e.target.value})}  type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Location
                                </label>

                                <input
                                    onChange={(e) => setFilterLead({...getfilterLead, location : e.target.value})}
                                    type="text"
                                    placeholder="Search city..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                                />
                            </div>

                        </div>

                    </form>


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
{/* 
                        <input
                            type="text"
                            placeholder="Search leads..."
                            className="w-full md:w-72 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                        /> */}

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-800">

                        <table className=" w-full border border-gray-200 rounded-xl overflow-hidden">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700 ">
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

                                {leads?.map((lead, i) => {

                                    return (

                                        <tr key={i} className="hover:bg-gray-50 transition">

                                            <td className="px-6 py-5 font-medium text-gray-800">
                                                {lead.fullname}
                                            </td>

                                            <td className="px-6 py-5 text-gray-600">
                                                {lead.phone}
                                            </td>

                                            <td className="px-6 py-5 text-gray-600">
                                                {lead.location}
                                            </td>

                                            <td className="px-6 py-5 text-gray-600">
                                                {lead.property_type}
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                                    {lead.status}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5">
                                                <div className="flex gap-2">

                                                    <button className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition">
                                                        View
                                                    </button>

                                                    <button onClick={() => {
                                                        setOpen(true)
                                                        LeadRetrive(lead.id)
                                                    }}
                                                        className="px-3 py-2 rounded-lg bg-yellow-100 text-yellow-700 text-sm font-medium hover:bg-yellow-200 transition">
                                                        Edit
                                                    </button>

                                                    <button className="px-3 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition">
                                                        Delete
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    )
                                })}


                            </tbody>

                        </table>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default AllLeads