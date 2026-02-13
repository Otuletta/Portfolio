"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

interface LenisProviderProps {
    children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08, // Lower value = more resistance/drag
            wheelMultiplier: 1.1, // Slight boost to maintain control
            touchMultiplier: 1.5,
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Reset scroll on pathname change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}
