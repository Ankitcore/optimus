import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "System Status | kshivam07",
  description: "Current status of kshivam07 systems and infrastructure.",
}

export default function StatusPage() {
  const services = [
    { name: "Website & Dashboard", status: "Operational", uptime: "99.99%" },
    { name: "Authentication API", status: "Operational", uptime: "99.99%" },
    { name: "REST API", status: "Operational", uptime: "100.00%" },
    { name: "Database Cluster", status: "Operational", uptime: "99.98%" },
    { name: "Email Delivery", status: "Operational", uptime: "100.00%" }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">System Status</h1>
        
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-4">
          <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-green-700 dark:text-green-400">All Systems Operational</h2>
            <p className="text-green-600/80 dark:text-green-400/80 text-sm">Static status indicator — no incidents reported today.</p>
          </div>
        </div>
      </div>

      <div className="border rounded-2xl overflow-hidden bg-card">
        <div className="border-b px-6 py-4 bg-muted/20">
          <h3 className="font-semibold">Service Status</h3>
        </div>
        <div className="divide-y">
          {services.map((service, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-4">
              <span className="font-medium">{service.name}</span>
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground hidden sm:block">Uptime: {service.uptime}</span>
                <span className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="mt-8 text-sm text-muted-foreground text-center">
        Note: This is a static status page representation. Real-time monitoring infrastructure has not yet been connected.
      </p>
    </div>
  )
}
