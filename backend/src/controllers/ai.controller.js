
import { generateContent } from "../services/ai.services.js";

export const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ message: "code is required" });
    }
    const response = await generateContent(code);
    return res.status(201).json({ response: response });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went worng in get-review route" });
  }
};
