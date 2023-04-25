import "./globals.css";

import "../../public/fonts/font.css";

import localFont from "next/font/local";

// export const pretendard = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Pretendard-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/retendard-Light.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Pretendard-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-Pretendard",
// });

export const metadata = {
  title: "Nook Book",
  description: "나만의 독립서점",
};

export const cello = localFont({
  src: "../../public/fonts/RegularBoldCelloGX.ttf",
  variable: "--font-RegularBoldCelloGX",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className={`relative`}>{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
