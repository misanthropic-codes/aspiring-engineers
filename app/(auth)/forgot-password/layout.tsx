import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Aspiring Engineers",
  description:
    "Reset your Aspiring Engineers account password. Enter your email to receive a password reset link.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
