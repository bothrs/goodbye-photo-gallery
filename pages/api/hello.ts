// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

type Data = {};


const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const airtableData: any[] = [];

  base("Content")
    .select({
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records) {
        records.forEach(function (record) {
          //@ts-ignore
          const image = record.get("Image")[0].url;

          airtableData.push({
            name: record.get("Name"),
            headline: record.get("Headline"),
            story: record.get("Story"),
            image: image,
          });
        });

        res.status(200).json(airtableData);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}
