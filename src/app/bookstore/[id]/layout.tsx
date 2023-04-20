import BaseLayout from "@/components/layout/BaseLayout";

export const metadata = {
  title: "서점 상세 - BookNook",
  description: "서점 상세 페이지",
};

interface BookStoreLayoutProps {
  children: React.ReactNode;
}

export default function BookStoreLayout({ children }: BookStoreLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
