import axios from "axios"

const BASEURL = " http://127.0.0.1:8000"

export async function LeadAddApi(data) {


    const headers = {
        "Content-Type": "application/json"
    }

    const response = await axios.post(`${BASEURL}/leads/`, data, { headers })

    return response
}

export async function ListleadAPi() {

    let headers = {
        "Accept": "application/json"
    }

    let response = await axios.get('http://127.0.0.1:8000/leads/', { headers })

    return response
}



export async function getLeadApi(id) {

    let headers = {
        'Accept': 'application/json'
    }

    let response = await axios.get(`http://127.0.0.1:8000/leads/${id}/`, { headers })

    return response

}

export async function UpdateLeadApi(id, data) {

    let headers = {
        'Content-Type': 'application/json'
    }

    let response = await axios.put(`http://127.0.0.1:8000/leads/${id}/`, data, { headers })

    return response

}

export async function GetFilterDataApi(datas) {

    let headers = {
        'Accept': 'application/json'
    }

    let response = await axios.get(`http://127.0.0.1:8000/leads/?status=${datas.lead_status}&location=${datas.location}&start_date=${datas.start_date}&end_date=${datas.end_date}`)


    return response

}