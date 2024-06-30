'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const colors = [
    "#333333",
    "#e0e0e0",
    "#1a2f4e",
    "#9b7bbb",
];

interface GradientCursorProps {
    isHovered: boolean;
}

const GradientCursor: React.FC<GradientCursorProps> = ({ isHovered }) => {
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const delayedMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);
    const circles = useRef<(HTMLDivElement | null)[]>([]);
    const size = isHovered ? 200 : 0;
    const delay = isHovered ? 0.015 : 0.005;

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

    return (
        <div className="relative h-screen pointer-events-none">
            {Array.from({ length: 4 }).map((_, i) => (
                <div
                    style={{
                        backgroundColor: colors[i],
                        width: size + 'px',
                        height: size + 'px',
                        filter: `blur(${isHovered ? 20 : 2}px)`,
                        transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
                    }}
                    className="top-0 left-0 fixed rounded-full mix-blend-difference"
                    key={i}
                    ref={(ref) => (circles.current[i] = ref)}
                />
            ))}
        </div>
    );
};

export default GradientCursor;
