"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const ARTICLES = [
    {
        title: "5 Tips for Perfect Golden Hour Photos",
        date: "Jan 10, 2026",
        category: "Tips",
        slug: "tips-golden-hour",
        src: "https://picsum.photos/seed/blog1/800/600",
    },
    {
        title: "Our New Studio Equipment: A Behind the Scenes Look",
        date: "Dec 28, 2025",
        category: "News",
        slug: "new-studio-gear",
        src: "https://picsum.photos/seed/blog2/800/600",
    },
    {
        title: "Winter Wedding Trends You Need to Know",
        date: "Dec 15, 2025",
        category: "Trends",
        slug: "winter-wedding-trends",
        src: "https://picsum.photos/seed/blog3/800/600",
    },
];

export function Journal() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12 px-4 md:px-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">Latest Journal</h2>
                        <p className="text-stone-500 text-lg">Insights, tips, and stories from behind the lens.</p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center font-bold text-lg hover:text-[var(--color-primary)] transition-colors group">
                        Read All Articles <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ARTICLES.map((article, i) => (
                        <Link href={`/blog/${article.slug}`} key={i} className="group cursor-pointer block">
                            <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-stone-200">
                                <Image
                                    src={article.src}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-900 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="flex items-center text-stone-400 text-xs font-bold uppercase tracking-widest mb-3">
                                <Calendar className="w-3 h-3 mr-2" />
                                {article.date}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-stone-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-stone-500 text-sm md:text-base line-clamp-2 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
