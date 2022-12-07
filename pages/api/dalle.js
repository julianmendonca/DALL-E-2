// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OpenAIApi, Configuration } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export default async function handler(req, res) {
  const text = req.query.text || req.body.text || "";
  if (!text) {
    res.status(400).json({ error: "No text provided" });
  }
  const response = await openai.createImage({
    prompt: text,
    n: 1,
    size: "256x256",
  });
  const image = response.data.data[0].url;
  res.status(200).send(image);
}
