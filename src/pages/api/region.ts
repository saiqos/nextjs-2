import type { NextApiRequest, NextApiResponse } from "next";
import { CountryFullDetails } from "@/types";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CountryFullDetails[] | { error: string }>,
) {
  const { region } = req.query;

  if (!region) {
    res.status(400).json({ error: "Please provide region parameter" });
  }

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
    );
    if (response.status === 404) {
      res
        .status(404)
        .json({ error: `No countries found for region ${region}` });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected error, please try again later" });
  }
}
