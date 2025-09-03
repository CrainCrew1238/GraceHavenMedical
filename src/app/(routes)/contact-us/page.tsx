"use server";

import { getDictionary } from '@/lib/dictionaries';
import ContactUsClient from "@/app/(routes)/contact-us/ContactUs.Client.tsx";

export default async function ContactPage() {
  const dict = await getDictionary(); // runs on the server
  return <ContactUsClient dict={dict} />;
}
