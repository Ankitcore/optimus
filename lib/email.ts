import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy")

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password?token=${token}`
  
  if (process.env.NODE_ENV !== "production") {
    console.log(`[EMAIL] Password reset link for ${email}: ${resetLink}`)
  }

  try {
    await resend.emails.send({
      from: "Optimus <noreply@optimus.example.com>",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
    })
  } catch (error) {
    console.error("Failed to send email", error)
  }
}
