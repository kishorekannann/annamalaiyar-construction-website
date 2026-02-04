import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Integrate with a CRM

    // For now, we'll log the submission and return success
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
