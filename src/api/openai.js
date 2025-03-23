export async function getUXInsights(prompt) {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    console.log("API KEY:", apiKey); // ← временно проверь, он не undefined?

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a UX expert providing practical suggestions.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        }),
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
        return data.choices[0].message.content;
    } else {
        console.error("OpenAI error:", data);
        throw new Error("Failed to get response from OpenAI");
    }
}
