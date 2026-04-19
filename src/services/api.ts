const API_URL = import.meta.env.VITE_API_URL;

export async function sendContact(data: any) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}