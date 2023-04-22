import { instance } from "@/axios/config";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await instance.post("url", {}).then((res) => res.data);

    return res.status(200).send(data);
  } catch (e) {
    res.status(400).send({ error: e });
  }
}
