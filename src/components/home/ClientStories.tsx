"use client";

import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TESTIMONIALS = [
    {
        quote: "The best photography experience I've ever had. Professional, creative, and fun! They made us feel so comfortable.",
        author: "Sarah Jenkins",
        role: "Portrait Session",
        rating: 5,
    },
    {
        quote: "Our wedding photos are absolutely stunning. Akllyl captured every emotion perfectly. We will treasure these forever.",
        author: "Mike & Emily",
        role: "Wedding",
        rating: 5,
    },
    {
        quote: "Incredible attention to detail. The branding shots have completely transformed my business website.",
        author: "James Chen",
        role: "Commercial",
        rating: 5,
    }
];

export function ClientStories() {
    return (
        <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-800 to-transparent opacity-30 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16">

                    <div className="lg:w-1/3 sticky top-24">
                        <h2 className="text-5xl text-white font-bold mb-6 leading-tight">
                            Client <br />
                            <span className="text-[var(--color-primary)] italic font-light">Stories</span>
                        </h2>
                        <p className="text-stone-400 text-lg mb-8 font-light leading-relaxed">
                            We make it our mission to not just take photos, but to build relationships and capture the true essence of who you are.
                        </p>
                        <Button variant="brand" className="py-6 px-8 text-lg">
                            Read More Reviews
                        </Button>

                        <div className="mt-12 flex items-center gap-4">
                            <div>
                                <div className="flex gap-1 text-[var(--color-primary)] mb-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
                                </div>
                                <p className="text-sm text-stone-500 font-medium">5.0 Rating based on 150+ reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TESTIMONIALS.map((testi, i) => (
                            <div
                                key={i}
                                className={`
                   bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-stone-700/50 hover:bg-stone-800 transition-colors
                   ${i === 2 ? 'md:col-span-2' : ''}
                `}
                            >
                                <Quote className="w-10 h-10 text-[var(--color-primary)] opacity-50 mb-6" />
                                <p className="text-xl font-light italic text-stone-200 mb-8 leading-relaxed">"{testi.quote}"</p>

                                <div className="flex items-center justify-between border-t border-stone-700 pt-6">
                                    <div>
                                        <p className="font-bold font-[family-name:var(--font-outfit)] text-lg">{testi.author}</p>
                                        <p className="text-stone-500 text-sm">{testi.role}</p>
                                    </div>
                                    <div className="flex gap-0.5 text-[var(--color-primary)]">
                                        {[...Array(testi.rating)].map((_, j) => (
                                            <Star key={j} className="fill-current w-4 h-4" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
