import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SignInForm } from "@/components/participate/sign-in-form";

export const metadata: Metadata = { title: "Sign in · SHIP" };

export default function SignInPage() {
  return <div className="px-6 py-16 md:py-24"><Card className="max-w-md mx-auto p-8 md:p-10"><SignInForm /></Card></div>;
}
