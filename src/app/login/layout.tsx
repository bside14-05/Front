export const metadata = {
  title: "BookNook login",
  description: "BookNook login page",
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <main className="h-screen">{children}</main>;
}

export default AuthLayout;
