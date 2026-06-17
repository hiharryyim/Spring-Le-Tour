import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, role, interest, timeline, message } =
      await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Spring Le Tour Website <contact@springletour.com>",
      to: "harry.yan@springletour.com",
      replyTo: email,
      subject: `New Contact from ${name} via Spring Le Tour Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A3A24A; border-bottom: 2px solid #A3A24A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #4A4A4A;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #4A4A4A;">
                <a href="mailto:${email}" style="color: #A3A24A;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #4A4A4A;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">I am</td>
              <td style="padding: 10px 0; color: #4A4A4A;">${role || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">Interested in</td>
              <td style="padding: 10px 0; color: #4A4A4A;">${interest || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">Timeline</td>
              <td style="padding: 10px 0; color: #4A4A4A;">${timeline || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #2C2C2C; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #4A4A4A; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            Sent from the contact form at springletour.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
