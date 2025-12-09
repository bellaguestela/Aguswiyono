import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Simulate processing contact form
    const contactData = {
      id: Date.now(),
      name,
      email,
      phone: phone || "",
      message,
      service: service || "general",
      timestamp: new Date().toISOString(),
      status: "pending"
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation to customer
    // 4. Create ticket in CRM system

    console.log("Contact form submission:", contactData);

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.",
      data: {
        id: contactData.id,
        status: "submitted"
      }
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}