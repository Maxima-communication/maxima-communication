"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Element } from "react-scroll";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {

  return (
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
}