"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Element } from "react-scroll";

const ReactLenis = dynamic(() => import('lenis/react').then(mod => mod.ReactLenis), {
  ssr: false
});

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="absolute top-0 w-full items-center justify-center"
      >
        <div className="bg-grid-gray-200/[0.4] dark:bg-grid-gray-800/[0.2]">
          <Element name="header">
            <SiteHeader />
          </Element>
          {children}
          <Element name="footer">
            <SiteFooter />
          </Element>
        </div>
      </motion.div>
    </AuroraBackground>
  );

  if (!isClient) {
    return content; // Render without ReactLenis on the server
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
}
