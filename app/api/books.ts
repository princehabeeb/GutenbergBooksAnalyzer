import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const response = await axios.get(`http://localhost:5000/api/fetch-book/${id}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
}
