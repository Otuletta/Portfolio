"use client";

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const NullGame = dynamic(
    () => import('@null/engine-core/NullGame').then(m => m.NullGame),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-screen w-full items-center justify-center bg-black font-mono text-sm text-[#00BFDF] animate-pulse">
                INITIALIZING_SYSTEM_CORE...
            </div>
        )
    }
);

function GameRenderer() {
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode') || 'spectator';

    // We force the NullGame to fill the screen
    return (
        <main className="h-screen w-full bg-black overflow-hidden relative">
            <style dangerouslySetInnerHTML={{ __html: `
                .null-game {
                    width: 100vw !important;
                    height: 100vh !important;
                    display: flex !important;
                    flex-direction: column !important;
                }
                /* Hide engine background to inherit main black */
                .null-game > div[style*="background"] {
                    background: transparent !important;
                }
            `}} />
            {/* 
                Note: NullGame internal state might need to be reset if mode changes.
                Keying by mode ensures a fresh mount when switching.
            */}
            <div className="w-full h-full" key={mode}>
                 <NullGame {...{ initialMode: mode } as any} />
            </div>
        </main>
    );
}

export default function NullDemoPage() {
    return (
        <Suspense fallback={<div className="bg-black h-screen w-full" />}>
            <GameRenderer />
        </Suspense>
    );
}
