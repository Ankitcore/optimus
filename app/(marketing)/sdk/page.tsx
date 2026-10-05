import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2 } from "lucide-react"

export const metadata = {
  title: "SDK | Optimus",
  description: "Optimus Software Development Kits.",
}

export default function SDKPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Code2 className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">SDK — Coming Soon</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        We are currently developing official SDKs for TypeScript, Python, and Go to make interacting with the Optimus API even easier. 
        In the meantime, you can interact directly with our REST APIs.
      </p>
      
      <div className="flex items-center justify-center gap-4">
        <Button size="lg" asChild className="rounded-full">
          <Link href="/api-reference">View REST API Reference</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="rounded-full">
          <Link href="/docs">Read Documentation</Link>
        </Button>
      </div>
    </div>
  )
}
