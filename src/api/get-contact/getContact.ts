import axios from 'axios'
import React from 'react'

export async function getContact() {
const res = await axios.get("http://localhost:3000/contact")
return res.data

}


export async function getFilterContact(id : string) {
    const res = await axios.get(`http://localhost:3000/contact/${id}`)
       console.log(res.data)
 return res.data
    
    }
    
