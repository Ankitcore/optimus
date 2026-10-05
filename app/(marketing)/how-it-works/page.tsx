import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "How It Works | Optimus",
  description: "Learn how the Optimus platform helps you build, deploy, and scale your applications.",
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Create your account",
      description: "Sign up securely using our integrated Auth.js authentication system. Get immediate access to your personalized dashboard."
    },
    {
      number: "02",
      title: "Set up your project",
      description: "Optimus automatically provisions your PostgreSQL database and configures your Prisma schema for immediate development."
    },
    {
      number: "03",
      title: "Build with pre-made APIs",
      description: "Utilize our secure Next.js Route Handlers to manage users, authentications, and profiles without writing boilerplate code."
    },
    {
      number: "04",
      title: "Deploy seamlessly",
      description: "Connect your GitHub repository to Vercel. Every push to your main branch triggers an optimized production build automatically."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">From idea to production in minutes</h1>
        <p className="text-xl text-muted-foreground">
          Discover the streamlined workflow that powers the next generation of applications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start md:items-center p-8 bg-card border rounded-3xl">
            <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-display text-2xl font-bold">
              {step.number}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button size="lg" asChild className="rounded-full px-8 h-14 text-lg">
          <Link href="/register">Start Your Journey</Link>
        </Button>
      </div>
    </div>
  )
}
