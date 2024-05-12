import axios from 'axios'
import React from 'react'

async function getContact() {
const res = await axios.get("http://localhost:3000/contact")
return res.data

}

export default getContact