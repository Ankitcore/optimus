import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "API Reference | kshivam07",
  description: "Complete REST API reference for kshivam07 endpoints.",
}

export default function ApiReferencePage() {
  const endpoints = [
    {
      method: "POST",
      path: "/api/auth/register",
      description: "Create a new user account.",
      auth: "Public",
      request: `{\n  "name": "John Doe",\n  "email": "john@example.com",\n  "password": "securepassword123"\n}`,
      response: `{\n  "success": true,\n  "data": { "id": "...", "name": "John Doe", "email": "john@example.com" }\n}`
    },
    {
      method: "POST",
      path: "/api/auth/forgot-password",
      description: "Generates a password reset token and sends an email.",
      auth: "Public",
      request: `{\n  "email": "john@example.com"\n}`,
      response: `{\n  "success": true,\n  "message": "If an account exists, a reset link has been sent."\n}`
    },
    {
      method: "POST",
      path: "/api/auth/reset-password",
      description: "Resets the user's password using a valid token.",
      auth: "Public",
      request: `{\n  "token": "reset_token_here",\n  "password": "newsecurepassword123"\n}`,
      response: `{\n  "success": true,\n  "message": "Password updated successfully"\n}`
    },
    {
      method: "PUT",
      path: "/api/profile",
      description: "Updates the authenticated user's profile information.",
      auth: "Required (Session)",
      request: `{\n  "name": "John Updated"\n}`,
      response: `{\n  "success": true,\n  "data": { "name": "John Updated" }\n}`
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">API Reference</h1>
        <p className="text-xl text-muted-foreground">
          Detailed documentation for the kshivam07 REST API endpoints.
        </p>
      </div>

      <div className="space-y-12">
        {endpoints.map((endpoint, i) => (
          <div key={i} className="border rounded-2xl overflow-hidden bg-card">
            <div className="border-b px-6 py-4 flex flex-wrap items-center gap-4 bg-muted/20">
              <Badge variant={endpoint.method === 'GET' ? 'secondary' : endpoint.method === 'POST' ? 'default' : 'outline'} className="font-mono text-sm">
                {endpoint.method}
              </Badge>
              <code className="text-lg font-semibold font-mono">{endpoint.path}</code>
              <div className="ml-auto text-sm text-muted-foreground">
                Auth: <span className="font-medium text-foreground">{endpoint.auth}</span>
              </div>
            </div>
            
            <div className="p-6">
              <p className="mb-6 text-muted-foreground">{endpoint.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Example Request</h4>
                  <pre className="p-4 bg-zinc-950 text-zinc-50 rounded-xl overflow-x-auto text-sm font-mono border border-zinc-800">
                    {endpoint.request}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Example Response</h4>
                  <pre className="p-4 bg-zinc-950 text-zinc-50 rounded-xl overflow-x-auto text-sm font-mono border border-zinc-800">
                    {endpoint.response}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
