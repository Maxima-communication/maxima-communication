"use client";

import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative" >
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 w-full items-center justify-center"
        >
          <div className="bg-grid-gray-800/[0.2]">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
