import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post("/api/insights", async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: "Act as a UX expert. Give 3 improvements for a landing page asking for emails.",
                },
            ],
        });

        const result = completion.choices[0].message.content;
        res.status(200).json({ insights: result });
    } catch (err) {
        console.error("OpenAI Error:", err);
        res.status(500).json({ error: "Failed to get insights" });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
