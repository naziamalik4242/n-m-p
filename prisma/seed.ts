import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Elite Nursing College",
        description: "Full-stack educational platform with student portal.",
        techStack: ["Next.js", "Prisma", "PostgreSQL"],
        liveLink: "https://elite-nursing.vercel.app",
        githubLink: "#",
      },
      {
        title: "Stellar Clothing",
        description: "Premium e-commerce store with glassmorphism UI.",
        techStack: ["Next.js", "Tailwind", "Stripe"],
        liveLink: "https://stellar-clothing.vercel.app",
        githubLink: "#",
      },
      {
        title: "AL-NOOR Store",
        description: "E-commerce platform with automated WhatsApp notifications.",
        techStack: ["Next.js", "n8n", "Gemini API"],
        liveLink: "#",
        githubLink: "#",
      }
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })