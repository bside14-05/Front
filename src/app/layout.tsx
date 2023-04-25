import "./globals.css";

import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../public/fonts/Pretendard-Regular.woff2",
  // src: [
  //   {
  //     path: "./fonts/Pretendard-Bold.woff2",
  //     weight: "700",
  //     style: "normal",
  //   },
  //   {
  //     path: "./fonts/retendard-Light.woff2",
  //     weight: "200",
  //     style: "normal",
  //   },
  //   {
  //     path: "./fonts/Pretendard-Regular.woff2",
  //     weight: "400",
  //     style: "normal",
  //   },
  // ],
  variable: "--font-Pretendard",
});

export const cello = localFont({
  src: "../../public/fonts/RegularBoldCelloGX.ttf",
  variable: "--font-RegularBoldCelloGX",
});

export const metadata = {
  title: "Nook Book",
  description: "나만의 독립서점",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${pretendard.variable} ${cello.variable}`}>
        <div className={`relative font-Pretendard`}>{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
