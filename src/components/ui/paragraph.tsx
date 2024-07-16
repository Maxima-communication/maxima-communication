import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ParagraphProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isLast: boolean;
}

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range, isLast }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`inline-block ${!isLast ? 'mr-[0.25em]' : ''}`}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
      })}
    </span>
  );
};

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const AnimatedText: React.FC<ParagraphProps> = ({ text, className }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");
  return (
    <p
      ref={container}
      className={`${className} text-center whitespace-normal`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]} 
            isLast={i === words.length - 1}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default AnimatedText;
  