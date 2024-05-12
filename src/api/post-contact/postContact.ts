import axios from 'axios'
import React from 'react'
import { TypeContact } from '../../types'

async function postContact(newContact : TypeContact) {
   await axios.post("http://localhost:3000/contact" , newContact)

}

export default postContact