import axios from "axios";

export async function editContact(id: string, data: {}) {
  console.log(data);
  const res = await axios.patch(`http://localhost:3000/contact/${id}`, data);
  console.log(res.data);
  return res.data;
}

export async function deleteContact(id: string) {
   await axios.delete(`http://localhost:3000/contact/${id}`);
}
