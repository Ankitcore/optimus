import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Pricing | Optimus",
  description: "Simple, transparent pricing for teams of all sizes.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for hobby projects and small experiments.",
      price: "Free",
      features: [
        "Up to 1,000 users",
        "Community support",
        "Basic authentication",
        "Shared PostgreSQL database"
      ],
      cta: "Get Started",
      href: "/register",
      popular: false
    },
    {
      name: "Pro",
      description: "For professional developers and small teams.",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10,000 users",
        "Priority email support",
        "Advanced authentication",
        "Dedicated PostgreSQL database",
        "Custom domains"
      ],
      cta: "Start Free Trial",
      href: "/register",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements.",
      price: "Custom",
      features: [
        "Unlimited users",
        "24/7 phone & email support",
        "SSO integration",
        "Dedicated infrastructure",
        "Custom SLAs"
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: false
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Simple, transparent pricing</h1>
        <p className="text-xl text-muted-foreground">
          Note: This is placeholder pricing. Optimus is currently free and open-source while in early development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`relative p-8 bg-card border rounded-3xl flex flex-col ${plan.popular ? 'border-primary shadow-lg ring-1 ring-primary' : 'shadow-sm'}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant={plan.popular ? "default" : "outline"} className="w-full rounded-full">
              <Link href={plan.href}>{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
