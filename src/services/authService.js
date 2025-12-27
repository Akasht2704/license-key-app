import axios from "axios";

const API_URL = "http://localhost:3000/api";

export async function loginApi(licenseKey) {
  const res = await axios.post(`${API_URL}/auth/login`, {
    license_key: licenseKey,
  });
   console.log('res.data-->',res.data);
  return res.data; 

 
}

export async function verifyTokenApi(token) {
  const res = await axios.get(`${API_URL}/verify-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
