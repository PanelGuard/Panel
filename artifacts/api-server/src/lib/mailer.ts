interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  id: number;
}

export async function sendContactNotification(data: ContactData): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.NOTIFY_EMAIL || "info@panelguardits.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("[Mailer] SMTP not configured, skipping email notification.");
    return;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Panel Guard Website" <${smtpUser}>`,
      to: notifyEmail,
      subject: `[طلب جديد] ${data.subject} - من: ${data.name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a237e; color: white; padding: 20px 24px;">
            <h2 style="margin: 0;">طلب استشارة جديد - Panel Guard</h2>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; width: 30%;">رقم الطلب:</td><td style="padding: 8px;">#${data.id}</td></tr>
              <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold;">الاسم:</td><td style="padding: 8px;">${data.name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">البريد الإلكتروني:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold;">الهاتف:</td><td style="padding: 8px;" dir="ltr">${data.phone}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">الموضوع:</td><td style="padding: 8px;">${data.subject}</td></tr>
              <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; vertical-align: top;">الرسالة:</td><td style="padding: 8px; white-space: pre-wrap;">${data.message}</td></tr>
            </table>
          </div>
          <div style="background: #6b0000; color: white; padding: 12px 24px; text-align: center; font-size: 13px;">
            Panel Guard - for IT Solutions and Training
          </div>
        </div>
      `,
    });

    console.log(`[Mailer] Email notification sent for contact #${data.id}`);
  } catch (err) {
    console.error("[Mailer] Failed to send email:", err);
  }
}
