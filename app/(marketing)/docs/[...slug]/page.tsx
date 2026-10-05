import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function DocPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <BookOpen className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-4xl font-display font-bold tracking-tight mb-6">Documentation Topic</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        This section of the documentation is currently being written. Please check back soon!
      </p>
      
      <Button size="lg" asChild className="rounded-full">
        <Link href="/docs">Back to Docs</Link>
      </Button>
    </div>
  )
}
