import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ─────────────────────────────────────────────────
// Sign up at https://www.emailjs.com and fill in these values:
//   1. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
//   2. Create an Email Template with variables: {{subject}}, {{message}}, {{from_name}}, {{reply_to}}
//      → copy Template ID
//   3. Go to Account → API Keys → copy your Public Key
export const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_expsoln";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_expsoln";
export const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

/**
 * Send an email via EmailJS.
 * Returns true on success, false on failure.
 */
export async function sendEmail(params: {
  subject: string;
  message: string;
  from_name: string;
  reply_to: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY,
    );
    return { ok: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : JSON.stringify(err);
    console.error("EmailJS error:", err);
    return { ok: false, error: message };
  }
}
