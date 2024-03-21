import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Auth W/ Prisma",
  description: "Create a Next.js app with Google Auth and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
