"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GALLERIES = [
    {
        title: "Weddings",
        subtitle: "A Love Story, Written in Light",
        href: "/portfolio/weddings",
        src: "https://picsum.photos/seed/wed_gallery/600/800",
        colSpan: "md:col-span-1",
    },
    {
        title: "Portraits",
        subtitle: "Capturing the Real You",
        href: "/portfolio/portraits",
        src: "https://picsum.photos/seed/portrait_gallery/600/800",
        colSpan: "md:col-span-1",
    },
    {
        title: "Events",
        subtitle: "Unforgettable Moments",
        href: "/portfolio/events",
        src: "https://picsum.photos/seed/event_gallery/1200/800",
        colSpan: "md:col-span-2",
    },
    {
        title: "Commercial",
        subtitle: "Building Your Brand",
        href: "/portfolio/commercial",
        src: "https://picsum.photos/seed/comm_gallery/600/800",
        colSpan: "md:col-span-1",
    },
    {
        title: "Travel",
        subtitle: "Journeys to Remember",
        href: "/portfolio/travel",
        src: "https://picsum.photos/seed/travel_gallery/600/800",
        colSpan: "md:col-span-1",
    },
];

export function FeaturedGalleries() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
                    <div className="max-w-xl">
                        <h2 className="text-5xl font-bold mb-6 text-stone-900 leading-tight">Featured  <br /><span className="text-[var(--color-primary)] italic font-light">Galleries</span></h2>
                        <p className="text-stone-500 text-lg md:text-xl font-light">
                            Explore our curated collections. From intimacy to majesty, every image tells a story that resonates.
                        </p>
                    </div>
                    <Link href="/portfolio" className="hidden md:flex items-center font-bold text-lg hover:text-[var(--color-primary)] transition-colors group mt-6 md:mt-0">
                        View All Galleries <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {GALLERIES.map((item, i) => (
                        <Link
                            href={item.href}
                            key={i}
                            className={`group block relative overflow-hidden rounded-sm ${item.colSpan}`}
                        >
                            <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] w-full overflow-hidden bg-stone-200">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Overlay Text for better readability on hover or just style */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                                    <p className="text-white/90 text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.subtitle}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Button variant="outline" className="w-full text-lg py-6">View All Galleries</Button>
                </div>
            </div>
        </section>
    );
}

// Importing Button locally or ensuring it's available. 
// Assuming Button component exists in "@/components/ui/Button" as per previous context.
import { Button } from "@/components/ui/Button";
