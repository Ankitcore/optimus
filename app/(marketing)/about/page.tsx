export const metadata = {
  title: "About Us | Optimus",
  description: "Learn about the mission and vision behind Optimus.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">About Optimus</h1>
        <p className="text-xl text-muted-foreground">
          The platform for teams who ship.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="p-8 bg-card border rounded-3xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 mt-0">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-0">
            Optimus was built to solve a single problem: the friction between writing code and shipping it to users. 
            We believe developers should spend their time solving business problems, not configuring infrastructure, 
            wiring up authentication, or wrestling with databases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-muted/30 border rounded-3xl">
            <h3 className="text-xl font-semibold mb-3 mt-0">What we do</h3>
            <p className="text-muted-foreground">
              We provide a seamless, full-stack environment integrating Next.js, Auth.js, Prisma, and PostgreSQL. 
              By standardizing the best-in-class tools, we eliminate setup fatigue.
            </p>
          </div>
          <div className="p-8 bg-muted/30 border rounded-3xl">
            <h3 className="text-xl font-semibold mb-3 mt-0">Our Vision</h3>
            <p className="text-muted-foreground">
              A future where any developer can go from idea to production-ready application in minutes, with enterprise-grade security and scalability out of the box.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
