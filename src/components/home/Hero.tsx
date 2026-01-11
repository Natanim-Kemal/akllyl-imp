"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

// Placeholder images
const IMAGES = [
    "https://picsum.photos/seed/wedding/800/1200",
    "https://picsum.photos/seed/portrait/800/1200",
    "https://picsum.photos/seed/event/800/1200",
    "https://picsum.photos/seed/fashion/800/1200",
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-stone-900 flex items-center justify-center">

            {/* Background Columns */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 h-full">
                {IMAGES.map((src, i) => (
                    <Column key={i} src={src} index={i} />
                ))}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 text-center text-white p-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl leading-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    Capturing <br />
                    <span className="text-[var(--color-primary)] italic font-light">Timeless</span> Stories
                </motion.h1>

                <motion.p
                    className="text-xl md:text-3xl mb-12 font-light drop-shadow-lg text-stone-100 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    One session, countless memories.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Button
                        className="rounded-none bg-[var(--color-primary)] text-stone-900 px-10 py-6 text-lg font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                    >
                        Discover Portfolio
                    </Button>
                </motion.div>
            </div>

            {/* Gradient Overlay for text readability - mimic source site depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />
        </section>
    );
}

function Column({ src, index }: { src: string; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="relative w-full h-[120%] -top-[10%]"
            initial={{ y: isEven ? -50 : 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{
                y: isEven ? 30 : -30,
                transition: { duration: 0.8, ease: "easeOut" }
            }}
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={src}
                    alt="Portfolio"
                    fill
                    className="object-cover brightness-75 hover:brightness-100 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
        </motion.div>
    );
}
