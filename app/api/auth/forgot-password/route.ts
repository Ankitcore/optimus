import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { z } from "zod"
import { sendPasswordResetEmail } from "@/lib/email"
import crypto from "crypto"

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = forgotPasswordSchema.parse(body)

    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Return success even if user not found for security
      return NextResponse.json({ success: true })
    }

    const token = crypto.randomBytes(32).toString("hex")
    const expires = new Date(Date.now() + 1000 * 60 * 60) // 1 hour

    await db.passwordResetToken.deleteMany({
      where: { email: user.email! }
    })

    await db.passwordResetToken.create({
      data: { email: user.email!, token, expires },
    })

    await sendPasswordResetEmail(user.email!, token)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[FORGOT_PASSWORD_ERROR]", error)
    return NextResponse.json(
      { success: false, error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." } },
      { status: 500 }
    )
  }
}
