import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { Spotlight } from "@/components/ui/spotlight";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-grid-gray-700/[0.2] relative">
      <Spotlight className="absolute top-0 left-0 w-full h-[calc(100vh+8rem)]" fill="white" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
