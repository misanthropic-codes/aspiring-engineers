import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Aspiring Engineers",
  description: "Set a new password for your Aspiring Engineers account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
