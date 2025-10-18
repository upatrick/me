import emailjs from "@emailjs/browser";

async function testEmailJS() {
  try {
    // Use hardcoded values for testing instead of environment variables
    const serviceId = "portifolio";
    const templateId = "template_9kqqsrr";
    const publicKey = "dPEKVzDCRLHr-q38D";

    const templateParams = {
      from_name: "Test User",
      from_email: "patrickdutra100@hotmail.com",
      subject: "Test Email from Script",
      message: "This is a test message sent from the emailjsTest script.",
      to_name: "Patrick Dutra",
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("EmailJS test message sent successfully:", result.status, result.text);
  } catch (error) {
    console.error("EmailJS test message failed:", error);
  }
}

// Run the test
testEmailJS();
