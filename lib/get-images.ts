const apikey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
export default async function getimages() {
  const api_url = `${baseurl}?client_id=${apikey}`;
  const res = await fetch(api_url);

  if (!res.ok) throw new Error("Cannot get images");

  return res.json();
}
