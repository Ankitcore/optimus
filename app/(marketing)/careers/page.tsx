export const metadata = {
  title: "Careers | kshivam07",
  description: "Join the kshivam07 team and help us build the future of software development.",
}

export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Careers at kshivam07</h1>
        <p className="text-xl text-muted-foreground">
          Help us build the platform for teams who ship.
        </p>
      </div>

      <div className="bg-card border rounded-3xl p-12 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">👋</span>
        </div>
        <h2 className="text-2xl font-semibold mb-3">No open positions currently</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We are not actively hiring at this moment, but we are always looking to connect with talented engineers. 
          Check back later as our team grows!
        </p>
      </div>
    </div>
  )
}
