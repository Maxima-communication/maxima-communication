"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';

const colors = {
    dark: [
        "#333333",
        "#e0e0e0",
        "#1a2f4e",
        "#9b7bbb",
    ],
    light: [
        "#7a869a",  // light grayish blue
        "#ffffff",  // cool blue-gray
        "#b0c4de",  // light steel blue
        "#ffffff",  // very light blue-gray
    ]
};

interface GradientCursorProps {
    isHovered: boolean;
}

const GradientCursor: React.FC<GradientCursorProps> = ({ isHovered }) => {
    const { theme } = useTheme();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const delayedMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);
    const circles = useRef<(HTMLDivElement | null)[]>([]);

    const size = isHovered ? 200 : 0;
    const delay = isHovered ? 0.015 : 0;

    const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

    const manageMouseMove = (e: MouseEvent): void => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY,
        };
    };

    const animate = (): void => {
        const { x, y } = delayedMouse.current;
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.100),
            y: lerp(y, mouse.current.y, 0.100),
        };
        moveCircles(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = window.requestAnimationFrame(animate);
    };

    const moveCircles = (x: number, y: number): void => {
        if (circles.current.length < 1) return;
        circles.current.forEach((circle, i) => {
            if (circle) {
                gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
            }
        });
    };

    useEffect(() => {
        animate();
        window.addEventListener('mousemove', manageMouseMove);
        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            if (rafId.current) {
                window.cancelAnimationFrame(rafId.current);
            }
        };
    }, [isHovered]);

    const currentColors = theme === 'dark' ? colors.dark : colors.light;

    return (
        <div className="relative h-screen pointer-events-none hidden lg:flex">
            {Array.from({ length: 4 }).map((_, i) => (
                <div
                    style={{
                        backgroundColor: currentColors[i],
                        width: size + 'px',
                        height: size + 'px',
                        filter: `blur(${isHovered ? 20 : 8}px)`,
                        opacity: theme === 'dark' ? 1 : 1,
                        transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, opacity 0.3s ease-out`,
                    }}
                    className={`top-0 left-0 fixed rounded-full ${theme === 'dark' ? 'mix-blend-difference' : 'mix-blend-difference'}`}
                    key={i}
                    ref={(ref) => {
                        if (ref) {
                            circles.current[i] = ref;
                        }
                    }}
                />
            ))}
        </div>
    );
};

export default GradientCursor;