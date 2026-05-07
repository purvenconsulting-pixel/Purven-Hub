import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatLLM Docs Assistant",
  description: "RAG-powered chatbot for ChatLLM Teams documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
