import { Shield, Key, Lock, Server } from "lucide-react"

export const metadata = {
  title: "Security | Optimus",
  description: "Security practices and infrastructure at Optimus.",
}

export default function SecurityPage() {
  const practices = [
    {
      icon: <Key className="w-6 h-6" />,
      title: "Authentication & Passwords",
      description: "All passwords are computationally hashed and salted using bcrypt with a high work factor before ever touching the database. We use secure HTTP-only cookies for session management to prevent XSS attacks."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "API Security",
      description: "All endpoints strictly validate incoming payloads using Zod schemas. Authorized routes verify active sessions server-side. Critical routes employ explicit role-based access control (RBAC)."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Deployed on Vercel's edge network with automatic DDoS protection. Databases are hosted in secure VPCs with restricted external access."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
          <Shield className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Security</h1>
        <p className="text-xl text-muted-foreground">
          How we protect your data and infrastructure.
        </p>
      </div>

      <div className="space-y-8 mb-16">
        {practices.map((practice, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-card border rounded-3xl">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shrink-0">
              {practice.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 bg-muted/30 border rounded-3xl text-center">
        <h3 className="text-xl font-semibold mb-2">Reporting a Vulnerability</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          If you believe you have found a security vulnerability in Optimus, please do not disclose it publicly. 
          Contact us immediately so we can investigate and patch the issue.
        </p>
        <a href="/contact" className="text-primary font-medium hover:underline">
          security@optimus.example.com
        </a>
      </div>
    </div>
  )
}
