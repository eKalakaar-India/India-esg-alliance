// src/utils/mail.js

import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import { createTransport } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// ======================================================
// PATH SETUP
// ======================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======================================================
// ENV CHECK
// ======================================================

console.log("MAIL HOST:", process.env.MAIL_SMTP_HOST);
console.log("MAIL PORT:", process.env.MAIL_SMTP_PORT);
console.log("MAIL USER:", process.env.MAIL_SMTP_USER);
console.log("MAIL ADMIN:", process.env.MAIL_ADMIN_USER);

// ======================================================
// MAIL TRANSPORTER
// ======================================================

const transporter = createTransport({
  host: process.env.MAIL_SMTP_HOST,

  port: Number(process.env.MAIL_SMTP_PORT),

  // true for 465
  // false for 587 / 2525
  secure: Number(process.env.MAIL_SMTP_PORT) === 465,

  auth: {
    user: process.env.MAIL_SMTP_USER,
    pass: process.env.MAIL_SMTP_PASS,
  },
});

// ======================================================
// EMAIL TEMPLATE RENDERER
// ======================================================

const renderEmail = (username) => {
  const templatePath = path.join(__dirname, "templates", "contact.hbs");

  const templateSource = fs.readFileSync(templatePath, "utf8");

  const emailTemplate = handlebars.compile(templateSource);

  const replacements = {
    username,
  };

  return emailTemplate(replacements);
};

// ======================================================
// CONTACT / QUERY EMAIL
// ======================================================

export const sendQueryMails = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  // ---------------- USER EMAIL ----------------

  const userMailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: options.email,

    subject: "Thank You for Your Interest in eKalakaar!",

    html: renderEmail(options.name),
  };

  // ---------------- ADMIN EMAIL ----------------

  const teamMailHtml = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>New Contact Query</title>
    </head>

    <body>

      <h1>
        ${options.query?.name || "NA"} -
        ${options.query?.purpose || "NA"} -
        ${new Date().toLocaleString()}
      </h1>

      <h2>Contact Us Form Initiated</h2>

      <p>
        <strong>Name:</strong>
        ${options.query?.name || "NA"}
      </p>

      <p>
        <strong>Organization:</strong>
        ${options.query?.organization || "NA"}
      </p>

      <p>
        <strong>Email Id:</strong>
        ${options.query?.email || "NA"}
      </p>

      <p>
        <strong>Contact No.:</strong>
        ${options.query?.contactNumber || "NA"}
      </p>

      <p>
        <strong>Subject:</strong>
        ${options.query?.purpose || options.query?.subject || "NA"}
      </p>

      <p>
        <strong>Message:</strong>
        ${options.query?.message || "NA"}
      </p>

    </body>
    </html>
  `;

  const teamMailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `Contact Us Form initiated - ${
      options.query?.purpose || "New Query"
    }`,

    html: teamMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(userMailOptions);

    await transporter.sendMail(teamMailOptions);

    console.log("Query email sent to user.");
    console.log(`Query email sent to admin: ${process.env.MAIL_ADMIN_USER}`);
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// DELIVERY EMAIL
// ======================================================

export const sendDeliveryMails = async (options, emailId) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const productsHtml = options
    .map(
      (prod) => `
        <div>

          <h2>Details:</h2>

          <p>
            <strong>Product Name:</strong>
            ${prod.title || "NA"}
          </p>

          <p>
            <strong>Amount Paid:</strong>
            ₹${prod.pricing?.amount || "0"}
          </p>

          <p>
            <strong>Video Link:</strong>
            <br />

            <a
              href="${prod.video?.url || "#"}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Your Performance
            </a>
          </p>

          <hr />

        </div>
      `,
    )
    .join("");

  const deliveryOrderMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>Ekalakaar Order Link Delivery</title>
    </head>

    <body>

      <h1>Your Order Has Been Delivered</h1>

      ${productsHtml}

      <p>
        This is an automated notification email.
      </p>

      <p>
        © ${new Date().getFullYear()} eKalakaar
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: emailId,

    subject: "Video Link Delivery",

    html: deliveryOrderMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log("Delivery email sent to user.");
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// NEW OPPORTUNITY NOTIFICATION
// ======================================================

export const sendNewOpportunityNotificationMails = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const notificationMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>New Posting Notification</title>
    </head>

    <body>

      <h1>New Opportunity Received</h1>

      <h2>Details:</h2>

      <p>
        <strong>Name:</strong>
        ${options.purpose || "NA"}
      </p>

      <p>
        <strong>Category:</strong>
        ${options.artCategory || "NA"}
      </p>

      <p>
        <strong>Languages:</strong>
        ${options.languages || "NA"}
      </p>

      <p>
        <strong>Description:</strong>
        ${options.description || "NA"}
      </p>

      <p>
        <strong>Location:</strong>
        ${options.location || "NA"}
      </p>

      <p>
        <strong>Theme:</strong>
        ${options.theme || "NA"}
      </p>

      <p>
        <strong>Link:</strong>
        <br />

        <a
          href="http://localhost:3000/Artist_Opportunities"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Opportunity
        </a>
      </p>

      <hr />

      <p>
        This is an automated notification email.
      </p>

      <p>
        © ${new Date().getFullYear()} eKalakaar
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `New Opportunity: ${options.purpose || "New Opportunity"}`,

    html: notificationMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log(
      `New opportunity notification sent to: ${process.env.MAIL_ADMIN_USER}`,
    );
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// FORGOT PASSWORD OTP
// ======================================================

export const sendForgotPasswordOtp = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const mail = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: options.email,

    subject: "Forgot Password",

    html: `
      <p>
        Dear <strong>${options.name}</strong>,
      </p>

      <p>
        Your One Time Password (OTP) for resetting
        the password is
        <strong>${options.otp}</strong>.
      </p>

      <p>
        This OTP is valid for 10 minutes.
        On expiry, kindly regenerate the OTP.
      </p>

      <p>Regards</p>

      <p>
        Team <strong>eKalakaar</strong>
      </p>
    `,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);

    console.log("Forgot password OTP sent.");
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// REGISTRATION OTP
// ======================================================

export const sendRegisterrOtp = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const mail = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: options.email,

    subject: "One Time Password For Registration",

    html: `
      <p>
        Dear <strong>${options.name}</strong>,
      </p>

      <p>
        Your One Time Password (OTP) for
        <strong>Registration</strong> is
        <strong>${options.otp}</strong>.
      </p>

      <p>
        This OTP is valid for 10 minutes.
        On expiry, kindly regenerate the OTP.
      </p>

      <p>Regards</p>

      <p>
        Team <strong>eKalakaar</strong>
      </p>
    `,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);

    console.log("Registration OTP sent.");
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// WELCOME EMAIL
// ======================================================

export const sendWelcomeMail = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const mail = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: options.email,

    subject: "Welcome to eKalakaar (eK)! Complete your profile.",

    html: `
      <p>
        Dear <strong>${options.name}</strong>,
      </p>

      <p>
        Greetings from <strong>eKalakaar (eK)</strong> -
        your digital platform for connecting traditional
        performing artists as opportunity seekers with
        patrons as talent seekers.
      </p>

      <p>
        To get access to paid opportunities from our
        patrons, please complete your profile.
      </p>

      <p>
        Thank you for joining us on this exciting journey.
        We look forward to being a part of your artistic
        endeavors.
      </p>

      <p>Warm Regards,</p>

      <p>
        <strong>eKalakaar (eK)</strong>
      </p>

      <p>
        E-mail ID: info@ekalakaar.com
      </p>

      <p>
        WhatsApp: +91 7701872112
      </p>

      <p>
        www.ekalakaar.com
      </p>
    `,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);

    console.log("Welcome email sent.");
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// PASSWORD RESET SUCCESS
// ======================================================

export const sendPasswordResetSuccessMail = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const mail = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: options.email,

    subject: "Your Password Reset was Successful",

    html: `
      <p>
        Dear <strong>${options.name}</strong>,
      </p>

      <p>
        We're writing to confirm that your password
        has been successfully reset.
      </p>

      <p>
        If you have any questions or concerns,
        please don't hesitate to reach out.
      </p>

      <p>Best regards,</p>

      <p>
        Team <strong>eKalakaar</strong>
      </p>
    `,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mail);

    console.log("Password reset confirmation sent.");
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// HIRE NOTIFICATION
// ======================================================

export const sendHireNotification = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const notificationMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>Opportunity Shortlisted</title>
    </head>

    <body>

      <h1>Ekalakaar Opportunity Shortlisted</h1>

      <h2>
        Hi,
        ${options.appliedBy?.firstName || ""}
        ${options.appliedBy?.lastName || ""}
      </h2>

      <h4>
        The applicant for the opportunity
        <strong>
          ${options.opportunity?.purpose || "NA"}
        </strong>
        has been hired by the patron.
      </h4>

      <h2>Opportunity Details:</h2>

      <p>
        <strong>Name:</strong>
        ${options.opportunity?.purpose || "NA"}
      </p>

      <p>
        <strong>Category:</strong>
        ${options.opportunity?.artCategory || "NA"}
      </p>

      <p>
        <strong>Languages:</strong>
        ${options.opportunity?.languages || "NA"}
      </p>

      <p>
        <strong>Description:</strong>
        ${options.opportunity?.description || "NA"}
      </p>

      <hr />

      <p>
        This is an automated notification email.
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `Opportunity Shortlisted: ${options.opportunity?.purpose || ""}`,

    html: notificationMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log(`Hire notification sent to: ${process.env.MAIL_ADMIN_USER}`);
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// INVITE NOTIFICATION
// ======================================================

export const sendInviteNotification = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const notificationMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>Opportunity Invited</title>
    </head>

    <body>

      <h1>Ekalakaar Opportunity Invited</h1>

      <h2>Hi Admin,</h2>

      <h4>
        An artist has been invited for an opportunity.
      </h4>

      <h2>Opportunity Details:</h2>

      <p>
        <strong>Opportunity ID:</strong>
        ${options.opportunityId || "NA"}
      </p>

      <p>
        <strong>Invited Artist Name:</strong>
        ${options.artist?.firstName || ""}
        ${options.artist?.lastName || ""}
      </p>

      <p>
        <strong>Invited Artist ID:</strong>
        ${options.artist?._id || "NA"}
      </p>

      <p>
        <strong>Invited Artist Email:</strong>
        ${options.artist?.email || "NA"}
      </p>

      <p>
        <strong>Invited Artist Phone:</strong>
        ${options.artist?.phoneNumber?.number || "NA"}
      </p>

      <hr />

      <p>
        This is an automated notification email.
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `Opportunity Invited: ${options.opportunityId || "NA"}`,

    html: notificationMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log(`Invite notification sent to: ${process.env.MAIL_ADMIN_USER}`);
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// SHORTLIST NOTIFICATION
// ======================================================

export const sendShortlistNotification = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const notificationMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>Opportunity Shortlisted</title>
    </head>

    <body>

      <h1>Ekalakaar Opportunity Shortlisted</h1>

      <h2>
        Hi,
        ${options.appliedBy?.firstName || ""}
        ${options.appliedBy?.lastName || ""}
      </h2>

      <h4>
        Your application for the opportunity
        <strong>
          ${options.opportunity?.purpose || "NA"}
        </strong>
        has been shortlisted.
      </h4>

      <h2>Opportunity Details:</h2>

      <p>
        <strong>Name:</strong>
        ${options.opportunity?.purpose || "NA"}
      </p>

      <p>
        <strong>Category:</strong>
        ${options.opportunity?.artCategory || "NA"}
      </p>

      <p>
        <strong>Languages:</strong>
        ${options.opportunity?.languages || "NA"}
      </p>

      <p>
        <strong>Description:</strong>
        ${options.opportunity?.description || "NA"}
      </p>

      <hr />

      <p>
        This is an automated notification email.
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `Opportunity Shortlisted: ${options.opportunity?.purpose || ""}`,

    html: notificationMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log(
      `Shortlist notification sent to: ${process.env.MAIL_ADMIN_USER}`,
    );
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};

// ======================================================
// NEW PERFORMANCE BOOKING
// ======================================================

export const sendNewPerformanceBookingMail = async (options) => {
  const messageId = `<${Date.now()}@ekalakaar.com>`;

  const notificationMailHtml = `
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8">

      <title>New Performance Request</title>
    </head>

    <body>

      <h1>New Performance Request Received</h1>

      <h2>Details:</h2>

      <p>
        <strong>Name:</strong>
        ${options.name || "NA"}
      </p>

      <p>
        <strong>Organization:</strong>
        ${options.organization || "NA"}
      </p>

      <p>
        <strong>Email:</strong>
        ${options.email || "NA"}
      </p>

      <p>
        <strong>Phone No.:</strong>
        ${options.contactNumber || "NA"}
      </p>

      <p>
        <strong>Category:</strong>
        ${options.artCategory || "NA"}
      </p>

      <p>
        <strong>Languages:</strong>
        ${options.language || "NA"}
      </p>

      <p>
        <strong>Requirements:</strong>
        ${options.requirements || "NA"}
      </p>

      <p>
        <strong>Location:</strong>
        ${options.city || "NA"},
        ${options.state || "NA"}
      </p>

      <p>
        <strong>Newsletter:</strong>
        ${options.newsletter || "NA"}
      </p>

      <hr />

      <p>
        This is an automated notification email.
      </p>

      <p>
        © ${new Date().getFullYear()} eKalakaar
      </p>

    </body>

    </html>
  `;

  const mailOptions = {
    from: {
      name: "eKalakaar",
      address: process.env.MAIL_SMTP_USER,
    },

    to: process.env.MAIL_ADMIN_USER,

    subject: `New Performance: ${options.performanceOccasion || "New Request"}`,

    html: notificationMailHtml,

    headers: {
      "Message-ID": messageId,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    console.log(
      `Performance booking notification sent to: ${process.env.MAIL_ADMIN_USER}`,
    );
  } catch (error) {
    console.log("Email service failed.");
    console.error(error);
  }
};
