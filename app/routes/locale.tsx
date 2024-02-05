import { json } from "@remix-run/react";

export async function loader() {
  return json({ locale: process.env.LANGUAGE });
}
