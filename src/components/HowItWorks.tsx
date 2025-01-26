import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowItWorks() {
  const data = [
    {
      title: "Login or Sign Up",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Start by logging into your account.
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Don’t have one? No worries! Click on the Sign Up button to
              create a free account in minutes.
            </li>
          </ul>
          <Image src="/auth.png" alt="auth" width={500} height={500} />
        </div>
      ),
    },
    {
      title: "Select Package",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Choose the package that best suits your e-commerce goals.
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Each package comes with detailed features, so you know exactly
              what you&apos;re getting.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Customize Your Website",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ After selecting a package, you can personalize your e-commerce
              website.
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Add your business name, logo, and preferred branding to make it
              yours.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Complete Payment",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Proceed to the secure checkout to make your payment.
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ We accept multiple payment methods, ensuring a hassle-free
              experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: " Launch Your Website",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Once the payment is confirmed, your e-commerce website will be
              ready to launch!
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ You’ll receive an email with your website’s details and login
              credentials.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Start Selling Online",
      content: (
        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Congratulations! Your e-commerce website is live.
            </li>
            <li className="flex gap-2 items-center text-neutral-200 text-sm md:text-lg">
              ✅ Add products, manage inventory, and start reaching customers
              online.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-slate-900 relative py-20">
      <Timeline data={data} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950"></div>
    </div>
  );
}
