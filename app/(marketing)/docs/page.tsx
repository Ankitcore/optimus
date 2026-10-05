import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Code, Terminal, Zap } from "lucide-react"

export const metadata = {
  title: "Documentation | Optimus",
  description: "Learn how to build, deploy, and scale with Optimus.",
}

export default function DocsPage() {
  const sections = [
    {
      icon: <Terminal className="w-6 h-6 text-primary" />,
      title: "Getting Started",
      description: "Learn the basics of Optimus, from creating your account to your first deployment.",
      links: [
        { name: "Quickstart Guide", href: "/docs/quickstart" },
        { name: "Project Architecture", href: "/docs/architecture" },
        { name: "Environment Variables", href: "/docs/env" },
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Authentication",
      description: "Implement secure login, registration, and session management using Auth.js.",
      links: [
        { name: "Setup NextAuth", href: "/docs/auth" },
        { name: "Password Recovery", href: "/docs/recovery" },
        { name: "Session Handling", href: "/docs/session" },
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Database & Prisma",
      description: "Manage your PostgreSQL database schema, migrations, and queries.",
      links: [
        { name: "Schema Definition", href: "/docs/schema" },
        { name: "Running Migrations", href: "/docs/migrations" },
        { name: "Prisma Client Usage", href: "/docs/prisma-client" },
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Deployment (Vercel)",
      description: "Configure your Vercel deployment for automatic builds and database pushes.",
      links: [
        { name: "Vercel Integration", href: "/docs/vercel" },
        { name: "Build Commands", href: "/docs/build" },
        { name: "Troubleshooting", href: "/docs/troubleshooting" },
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Everything you need to know about building with Optimus.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {sections.map((section, i) => (
          <div key={i} className="p-8 bg-card border rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{section.description}</p>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-sm font-medium hover:text-primary transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border rounded-2xl bg-muted/30 max-w-5xl">
        <h3 className="text-lg font-semibold mb-2">Need API details?</h3>
        <p className="text-muted-foreground mb-4">Check out our comprehensive API Reference for endpoint specifications.</p>
        <Button asChild>
          <Link href="/api-reference">View API Reference</Link>
        </Button>
      </div>
    </div>
  )
}
