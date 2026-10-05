import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Integrations | Optimus",
  description: "Connect Optimus with the tools you already use.",
}

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "GitHub",
      description: "Automatically deploy your code when you push to your main branch.",
      status: "Available",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Vercel",
      description: "Host your Next.js application with zero configuration.",
      status: "Available",
      icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png"
    },
    {
      name: "PostgreSQL",
      description: "Secure, scalable relational database integration via Prisma.",
      status: "Available",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "Resend",
      description: "Transactional email delivery for password resets and notifications.",
      status: "Available",
      icon: "https://resend.com/static/brand/resend-icon-black.svg"
    },
    {
      name: "Auth.js",
      description: "Comprehensive authentication protocol and session management.",
      status: "Available",
      icon: "https://authjs.dev/img/logo-sm.png"
    },
    {
      name: "Stripe",
      description: "Process payments and manage subscriptions.",
      status: "Coming Soon",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Integrations</h1>
        <p className="text-xl text-muted-foreground">
          Optimus connects seamlessly with the best tools in the modern web ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {integrations.map((integration, i) => (
          <div key={i} className="p-6 bg-card border rounded-2xl shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-xl p-2 border flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={integration.icon} alt={`${integration.name} logo`} className="w-8 h-8 object-contain" />
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${integration.status === 'Available' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-secondary text-secondary-foreground'}`}>
                {integration.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
            <p className="text-muted-foreground text-sm flex-1">{integration.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-6">Need an integration that isn't listed here?</p>
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/contact">Request Integration</Link>
        </Button>
      </div>
    </div>
  )
}
