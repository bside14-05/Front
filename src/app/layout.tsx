import "./globals.css";
import "../../public/font/font.css";

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
      <body className={`font-Pretendard`}>
        <div>{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
