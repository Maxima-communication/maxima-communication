// components/LenisProvider.tsx
'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ReactLenis } from 'lenis/react';

// Dynamically import gsap and ScrollTrigger to prevent server-side execution
const gsap = typeof window !== 'undefined' ? require('gsap') : null;
const ScrollTrigger = typeof window !== 'undefined' ? require('gsap/ScrollTrigger') : null;

// Ensure gsap registers plugins only on the client side
if (typeof window !== 'undefined' && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return; // Exit if gsap or ScrollTrigger are not loaded

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    // Check if lenisRef and its methods are defined
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.on('scroll', ScrollTrigger.update);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []); // Empty dependency array ensures this runs once on the client side

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}