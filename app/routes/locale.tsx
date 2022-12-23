import { json } from "remix";

export async function loader() {
  return json({ locale: process.env.LANGUAGE });
}
