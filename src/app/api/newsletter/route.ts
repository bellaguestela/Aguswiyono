import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
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

    // Simulate newsletter subscription
    const subscriptionData = {
      id: Date.now(),
      email,
      name: name || "",
      timestamp: new Date().toISOString(),
      status: "active",
      preferences: {
        products: true,
        promotions: true,
        newsletter: true
      }
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Add to email marketing service (Mailchimp, SendGrid, etc.)
    // 3. Send welcome email
    // 4. Track analytics

    console.log("Newsletter subscription:", subscriptionData);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Terima kasih telah berlangganan newsletter kami!",
      data: {
        id: subscriptionData.id,
        email: subscriptionData.email,
        status: "subscribed"
      }
    });

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process newsletter subscription" },
      { status: 500 }
    );
  }
}