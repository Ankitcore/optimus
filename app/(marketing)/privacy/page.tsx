export const metadata = {
  title: "Privacy Policy | kshivam07",
  description: "Privacy Policy for kshivam07.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: October 5, 2026</p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg mb-8 text-sm">
          <strong>Disclaimer:</strong> This is a placeholder privacy policy for demonstration purposes. It has not been reviewed by legal counsel and should not be considered legally binding or compliant with regulations like GDPR or CCPA.
        </div>

        <h2>1. Information we collect</h2>
        <p>
          We collect information to provide better services to our users. This includes:
        </p>
        <ul>
          <li><strong>Account information:</strong> Name, email address, and authentication credentials when you register.</li>
          <li><strong>Usage information:</strong> Information about how you interact with our services, error logs, and performance data.</li>
        </ul>

        <h2>2. How we use your information</h2>
        <p>
          We use the information we collect to operate, maintain, and improve our services, including to:
        </p>
        <ul>
          <li>Provide authentication and authorization (via Auth.js).</li>
          <li>Process transactions and send related information.</li>
          <li>Send technical notices, updates, and security alerts.</li>
        </ul>

        <h2>3. Data storage and security</h2>
        <p>
          Your data is stored securely in our PostgreSQL database infrastructure. We implement reasonable security measures, including strong password hashing (bcrypt), to protect your personal information against unauthorized access or disclosure.
        </p>

        <h2>4. Third-party services</h2>
        <p>
          We integrate with certain third-party services (such as Vercel for hosting and Resend for emails) which may have access to certain data in order to perform their functions on our behalf. These services are bound by their respective privacy policies.
        </p>

        <h2>5. Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or delete your personal information. You can manage your profile information directly from your kshivam07 dashboard.
        </p>

        <h2>6. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at privacy@kshivam07.example.com or via our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  )
}
