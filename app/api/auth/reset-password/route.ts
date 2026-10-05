import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcryptjs from "bcryptjs"
import { z } from "zod"

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { token, password } = resetPasswordSchema.parse(body)

    const resetToken = await db.passwordResetToken.findUnique({
      where: { token },
    })

    if (!resetToken || resetToken.expires < new Date()) {
      return NextResponse.json(
        { success: false, error: { code: "INVALID_TOKEN", message: "Invalid or expired reset token." } },
        { status: 400 }
      )
    }

    const passwordHash = await bcryptjs.hash(password, 12)

    await db.user.update({
      where: { email: resetToken.email },
      data: { passwordHash },
    })

    await db.passwordResetToken.delete({
      where: { id: resetToken.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: { code: "VALIDATION_ERROR", message: error.errors[0].message } },
        { status: 400 }
      )
    }
    console.error("[RESET_PASSWORD_ERROR]", error)
    return NextResponse.json(
      { success: false, error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." } },
      { status: 500 }
    )
  }
}
