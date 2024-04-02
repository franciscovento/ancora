import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (event) => {
  const requestBody = JSON.parse(event.body) as {
    name: string,
    email: string,
    phone: string,
    city: string,
    country: string,
    area: string,
    cv: string,
    message: string,
  };
  const response = await fetch(
    // `${process.env.URL}/.netlify/functions/emails/job`,
    `https://ancora-production.netlify.app/.netlify/functions/emails/job`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: "contacto@ancora.com.mx",
        to: "talentoenpotencia@ancora.com.mx",
        subject: "Job application",
        attachments: [
          {
            content: requestBody.cv,
            filename: "cv.pdf",
            type: "pdf",
          }
        ],
        parameters: {
          name: requestBody.name,
          email: requestBody.email,
          phone: requestBody.phone,
          city: requestBody.city,
          country: requestBody.country,
          area: requestBody.area,
          message: requestBody.message,
        }
      })
    }
  );

  const responseBody = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(responseBody)
  };
};

export { handler };
