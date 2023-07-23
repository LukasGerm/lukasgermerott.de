import sgMail from "@sendgrid/mail";

export const sendMail = async (infos: {
  email: string;
  subject?: string;
  number: string;
  name: string;
}) => {
  sgMail.setApiKey(process.env.SENDGRID_KEY!);

  const msg = {
    to: "lukas@lukasgermerott.com", // Change to your recipient
    from: "contact@lukasgermerott.de", // Change to your verified sender
    subject: "New message from your website",
    text: `You have a new message from ${infos.name} with the number ${infos.number} and email ${infos.email}. The subject was ${infos.subject}.`,
  };

  await sgMail.send(msg);
};
