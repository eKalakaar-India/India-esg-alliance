import catchAsync from "../../utils/catchAsync.js";
import { sendEventApplications } from "../../services/emailService.js";

const createApplications = catchAsync(async (req, res) => {
  try{
    const {
    fullName,
  mobile,
  email,
  companyName,
  sector
  } = req.body;

  // Basic validation
  if (!fullName || !email || !mobile) {
    return res.status(400).json({
      success: false,
      message: "Name, email and mobile number are required.",
    });
  }

  // Send emails only - no database
  await sendEventApplications({
    fullName,
    mobile,
    email,
    companyName,
    sector
  }, req.file);

  return res.status(200).json({
    success: true,
    message: "Your Application has been sent successfully.",
  });
  }catch(err){
    console.error('Error in createApplications:', err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request. Please try again later.",
    });
  }
  
});

export { createApplications };