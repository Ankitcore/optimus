import { FileText } from "lucide-react"

export const metadata = {
  title: "Blog | Optimus",
  description: "News, updates, and engineering posts from the Optimus team.",
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <FileText className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Blog — Coming Soon</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        We are currently building out our CMS to bring you engineering deep dives, product updates, and tutorials. 
        Check back later for our first post!
      </p>
    </div>
  )
}
