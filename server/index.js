import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const USE_MOCK = process.env.USE_MOCK === "true";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Дозволити запити з Vercel
const allowedOrigins = [
    "https://ux-insight-landing.vercel.app",
    "https://ux-insight-landing-git-main-andriisavelievs-projects.vercel.app",
    "https://ux-insight-landing-fjr48yk7j-andriisavelievs-projects.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

app.use(express.json());

// ✅ Відповісти на preflight запити
app.options("/api/insights", cors());

app.post("/api/insights", async (req, res) => {
    try {
        if (USE_MOCK) {
            const mockInsights = `
✅ Make your CTA button more visible.
✅ Add testimonials near the form.
✅ Simplify the email input experience.
      `;
            return res.status(200).json({ insights: mockInsights });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: "Act as a UX expert. Give 3 improvements for a landing page asking for emails."
                }
            ]
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
