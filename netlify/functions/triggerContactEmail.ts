import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    service_option: string,
    description: string,
    name: string,
    email: string,
  };
  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  // await fetch(`${process.env.URL}/.netlify/functions/emails/info`, {
  await fetch(`https://ancora-production.netlify.app/.netlify/functions/emails/info`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: 'contacto@ancora.com.mx',
      to: 'contacto@ancora.com.mx',
      subject: "User info request",
      parameters: {
        service_option: requestBody.service_option,
        description: requestBody.description,
        name: requestBody.name,
        email: requestBody.email,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Request info email sent!"),
  };
};

export { handler };
