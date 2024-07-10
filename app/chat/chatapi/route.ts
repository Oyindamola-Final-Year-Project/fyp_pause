import OpenAI from "openai";

// Assign API key to variable
const apiKey = process.env.OPEN_AI_KEY;
// Initialise OpenAI API
const openai = new OpenAI({ apiKey: apiKey });

export async function POST(req: Request) {
    const { question } = await req.json();
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who supports Liverpool FC",
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