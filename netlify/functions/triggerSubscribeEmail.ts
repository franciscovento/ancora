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
    email: string;
  };
  console.log(requestBody);
  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  // const response = await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
  const response = await fetch(`https://ancora-production.netlify.app/.netlify/functions/emails/subscribed`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: 'contacto@ancora.com.mx',
      to: 'srodriguez@ancora.com.mx',
      subject: "User subscription",
      parameters: {
        email: requestBody.email,
      },
    }),
  });

  const responseBody = await response.json();
  return {
    statusCode: response.status,
    body: JSON.stringify(responseBody),
  };
};

export { handler };
