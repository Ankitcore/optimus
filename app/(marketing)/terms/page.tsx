export const metadata = {
  title: "Terms of Service | Optimus",
  description: "Terms of Service for Optimus.",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: October 5, 2026</p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg mb-8 text-sm">
          <strong>Disclaimer:</strong> This is a placeholder document for demonstration purposes. It does not constitute legal advice or a binding legal agreement.
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account and accessing Optimus, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
        </p>

        <h2>2. Account Responsibilities</h2>
        <p>
          You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. We strongly recommend using a complex, unique password.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>
          You agree not to use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws).
        </p>

        <h2>4. Service Availability</h2>
        <p>
          We strive for 99.99% uptime, but we do not guarantee that the service will be available continuously. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          The service and its original content, features, and functionality are and will remain the exclusive property of Optimus and its licensors.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Optimus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.
        </p>

        <h2>7. Changes</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes via email or prominent notice on our platform.
        </p>
      </div>
    </div>
  )
}
