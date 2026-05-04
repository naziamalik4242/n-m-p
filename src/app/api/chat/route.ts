import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: `Aap Nazia Malik ke AI Assistant hain. 
    Nazia aik Full-Stack Developer aur AI Student hain. 
    Skills: Next.js, Tailwind CSS, TypeScript, Prisma, Node.js.
    Location: Pakistan.
    Projects: Elite Nursing College, Stellar Clothing, AL-NOOR Store.
    Aapka maqsad client ko satisfy karna aur services sale karna hai.`,
    messages,
  });

  return result.toTextStreamResponse();
}