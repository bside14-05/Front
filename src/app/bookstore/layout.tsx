export const metadata = {
  title: "서점 리스트 - BookNook",
  description: "서점 리스트 페이지 입니다.",
};

interface BookStoreLayoutProps {
  children: React.ReactNode;
}

export default function BookStoreLayout({ children }: BookStoreLayoutProps) {
  return (
    <main className="min-h-screen max-w-screen-md mx-auto">{children}</main>
  );
}
