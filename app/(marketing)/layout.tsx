import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background noise-overlay">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">{children}</main>
      <FooterSection />
    </div>
  )
}
