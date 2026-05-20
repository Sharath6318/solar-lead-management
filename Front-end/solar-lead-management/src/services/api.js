import axios from "axios"

const BASEURL = " http://127.0.0.1:8000"

export async function LeadAddApi(data) {
    

    const headers = {
        "Content-Type": "application/json"
    }

    const response = await axios.post(`${BASEURL}/leads/`,data, { headers })

    return response
}