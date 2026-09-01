import catchAsync from "../utils/catchAsync.js";
import { sendQueryMails } from "../utils/mail.js";

const createQuery = catchAsync(async (req, res) => {
  const {
    name,
    email,
    message,
    purpose,
    contactNumber,
    location,
    link,
    organization,
    intrestedIn,
  } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required.",
    });
  }

  console.log("Query received:");
  console.log(req.body);

  // Send emails only - no database
  await sendQueryMails({
    name,
    email,
    query: {
      name,
      email,
      message,
      purpose,
      contactNumber,
      location,
      link,
      organization,
      intrestedIn,
    },
  });

  return res.status(200).json({
    success: true,
    message: "Your query has been sent successfully.",
  });
});

export { createQuery };
