import BaseLayout from "@/components/layout/BaseLayout";

export const metadata = {
  title: "서점 리스트 - BookNook",
  description: "서점 리스트 페이지",
};

interface BSListLayoutProps {
  children: React.ReactNode;
}

/**
 * BSList : Book Store List
 */
export default function BSListLayout({ children }: BSListLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
