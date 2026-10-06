import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="font-display text-xl mr-auto">kshivam07 Dashboard</div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{session.user.email}</span>
            <Button variant="outline" asChild>
              <Link href="/api/auth/signout">Sign out</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {session.user.name}</h1>
            <p className="text-muted-foreground mt-2">Manage your account and view your resources.</p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card border rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Profile</h3>
              <p className="text-sm text-muted-foreground mb-4">View and edit your profile information.</p>
              <Button variant="secondary" asChild>
                <Link href="/dashboard/profile">Edit Profile</Link>
              </Button>
            </div>
            
            {session.user.role === "ADMIN" && (
              <div className="p-6 bg-card border border-primary/20 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Admin Panel</h3>
                <p className="text-sm text-muted-foreground mb-4">Manage users and application settings.</p>
                <Button variant="default" asChild>
                  <Link href="/admin">Go to Admin</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
