import { getToken } from "./token";

/**
 * Token ko API se validate karta hai
 * @returns {boolean} true = valid, false = invalid / expired
 */
export async function validateAuth() {
  const token = getToken();

  // token hi nahi hai
  if (!token) return false;

  try {
    const res = await fetch("http://localhost:3000/api/auth/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return false;

    const data = await res.json();

    // API se expected response: { valid: true }
    return data.valid === true;
  } catch (err) {
    console.error("Token validation failed:", err);
    return false;
  }
}
