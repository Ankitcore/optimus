import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Zap, Shield, Globe, Workflow, Layers } from "lucide-react"

export const metadata = {
  title: "kshivam07 — Powerful Tools for Teams Who Ship",
  description: "Explore the core features of kshivam07 including seamless deployments, integrated authentication, and secure database management.",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast Deployments",
      description: "Push to your main branch and watch your code go live in seconds with Vercel integration."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Built-in Authentication",
      description: "Secure, robust authentication system using Auth.js with password hashing and email verification out of the box."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Serverless Database",
      description: "Fully managed PostgreSQL databases with Prisma ORM, ensuring type-safe queries and scalable infrastructure."
    },
    {
      icon: <Workflow className="h-6 w-6 text-primary" />,
      title: "Role-Based Access Control",
      description: "Granular permissions with built-in User and Admin roles for safe team management."
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Beautiful UI Components",
      description: "Accessible, customizable components powered by Radix UI and Tailwind CSS for rapid prototyping."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "API Ready",
      description: "REST APIs structured seamlessly via Next.js Route Handlers, ready to be consumed by any client."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Everything you need to ship faster</h1>
        <p className="text-xl text-muted-foreground">
          kshivam07 provides a complete, production-ready full-stack architecture so you can focus on building your product, not your infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, i) => (
          <div key={i} className="p-8 bg-card border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border rounded-3xl p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-4">Ready to start building?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join thousands of developers shipping faster with kshivam07.</p>
        <Button size="lg" asChild className="rounded-full px-8">
          <Link href="/register">Get Started Free</Link>
        </Button>
      </div>
    </div>
  )
}
