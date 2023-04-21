import React from "react";
import "../globals.css";
import "../../../public/font/font.css";

export const metadata = {
  title: "My Page",
  description: "my page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
