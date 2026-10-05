import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background noise-overlay">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
