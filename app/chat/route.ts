import OpenAI from "openai";

// Assign API key to variable
const apiKey = process.env.OPENAI_API_KEY;
// Initialise OpenAI API
const openai = new OpenAI({ apiKey: apiKey });

export async function POST(req: Request) {
    const { question } = await req.json();
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a virtual mental health counsellor for university students. You are empathetic, acknowledge their struggles, and provide coping strategies for them when they share their struggles. You ask them to not give any private information like real name.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 300,
    });
    return new Response(JSON.stringify(response));
  }