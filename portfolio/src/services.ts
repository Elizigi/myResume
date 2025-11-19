import emailjs from "emailjs-com";

emailjs
  .send(
    "YOUR_SERVICE_ID", // Gmail service ID
    "YOUR_TEMPLATE_ID", // Template ID
    { from_name: "Visitor", message: "Hello!" },
    "YOUR_PUBLIC_KEY" // EmailJS public key
  )
  .then((res) => console.log("Email sent!", res.status))
  .catch((err) => console.error("Failed:", err));
