import nodemailer from 'nodemailer';

export const ROLES = {
  'state-project-manager': 'State Project Manager – Uttar Pradesh',
  'district-msme-coordinator': 'District MSME Coordinator'
};

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SMTP_HOST,
  port: Number(process.env.MAIL_SMTP_PORT) || 465,
  secure: String(process.env.MAIL_SMTP_SECURE).toLowerCase() !== 'false',
  auth: { user: process.env.MAIL_SMTP_USER, pass: process.env.MAIL_SMTP_PASS }
});

const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const row = (label, value) =>
  `<tr><td style="padding:6px 12px;color:#475569;width:180px">${label}</td>` +
  `<td style="padding:6px 12px;color:#0F2747;font-weight:600">${esc(value) || '–'}</td></tr>`;

/** Sends the application (with CV attached) to the HR inbox, then a confirmation to the applicant. */
export async function sendApplication(app, file) {
  const role = ROLES[app.position];
  const from = process.env.MAIL_FROM || process.env.MAIL_SMTP_USER;

  await transporter.sendMail({
    from,
    to: process.env.CAREERS_TO || process.env.MAIL_SMTP_USER,
    replyTo: `"${app.fullName.replace(/"/g, '')}" <${app.email}>`,
    subject: `New application: ${role} – ${app.fullName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px">
        <div style="background:#0F2747;color:#fff;padding:16px 20px;border-bottom:4px solid #D6B98C">
          <strong style="font-size:18px">New career application</strong>
        </div>
        <table style="width:100%;border-collapse:collapse;background:#F8FAFC">
          ${row('Position', role)}${row('Name', app.fullName)}${row('Email', app.email)}
          ${row('Phone', app.phone)}${row('Experience (years)', app.experience)}${row('Location', app.location)}
        </table>
        <p style="color:#0F2747;font-weight:600;margin:16px 12px 4px">Cover note</p>
        <p style="color:#475569;margin:0 12px;white-space:pre-wrap">${esc(app.message) || '–'}</p>
      </div>`,
    attachments: [{ filename: file.originalname, content: file.buffer, contentType: file.mimetype }]
  });

  // Confirmation is best-effort: a failure here must not fail the application.
  try {
    await transporter.sendMail({
      from,
      to: app.email,
      subject: 'We received your application – India ESG',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;color:#475569">
          <p>Dear ${esc(app.fullName)},</p>
          <p>Thank you for applying for <strong style="color:#0F2747">${esc(role)}</strong>. We have received your CV and our team will contact you if your profile matches the requirements.</p>
          <p>Regards,<br><strong style="color:#0F2747">India ESG</strong></p>
        </div>`
    });
  } catch (err) {
    console.error('Confirmation email failed:', err.message);
  }
}
