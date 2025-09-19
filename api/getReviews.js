export default async function handler(req, res) {
  const PLACE_ID = "ChIJh2h_m__vpDsR6g_pbdolKkI";
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      res.status(200).json(data.result.reviews);
    } else {
      console.error("Google API response:", data);
      res.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
