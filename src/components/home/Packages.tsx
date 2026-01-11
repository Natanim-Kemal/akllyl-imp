"use client";

import { Checka, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PACKAGES = [
    {
        name: "Portrait Session",
        price: "$299",
        description: "Perfect for individuals, couples, or small families.",
        features: [
            "1 Hour Session",
            "20 High-Res Edited Images",
            "Online Gallery",
            "Print Release",
            "1 Location"
        ],
        highlight: false,
    },
    {
        name: "Wedding Collection",
        price: "$2,899",
        description: "Complete coverage for your most special day.",
        features: [
            "8 Hours Coverage",
            "Two Photographers",
            "All Edited High-Res Images",
            "Online Gallery & Store",
            "Engagement Session Included",
            "Heirloom Album ($500 Value)"
        ],
        highlight: true,
    },
    {
        name: "Event Coverage",
        price: "$250",
        unit: "/hr",
        description: "Capture the energy of your corporate or private event.",
        features: [
            "Minimum 2 Hours",
            "Candid & Posed Shots",
            "Next Day Teasers",
            "Online Gallery",
            "Commercial Usage Rights"
        ],
        highlight: false,
    },
];

export function Packages() {
    return (
        <section className="py-24 bg-stone-50" id="packages">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-stone-900">
                        Simple, Transparent <br />
                        <span className="text-[var(--color-primary)] italic font-light">Pricing</span>
                    </h2>
                    <p className="text-stone-500 text-lg md:text-xl font-light">
                        No hidden fees. Just beautiful photography and memories that last a lifetime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {PACKAGES.map((pkg, i) => (
                        <div
                            key={i}
                            className={`
                relative bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-xl
                ${pkg.highlight
                                    ? 'border-[var(--color-primary)] ring-1 ring-[var(--color-primary)] shadow-md md:-translate-y-4'
                                    : 'border-stone-100 hover:border-stone-200'}
              `}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-stone-900 text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-stone-900 mb-2">{pkg.name}</h3>
                                <p className="text-stone-500 text-sm h-10">{pkg.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl md:text-5xl font-bold text-stone-900">{pkg.price}</span>
                                    {pkg.unit && <span className="text-stone-500 ml-1">{pkg.unit}</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, j) => (
                                    <li key={j} className="flex items-start text-stone-600">
                                        <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.highlight ? 'text-[var(--color-primary)]' : 'text-stone-300'}`} />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.highlight ? 'brand' : 'outline'}
                                className="w-full py-6 text-base"
                            >
                                Book {pkg.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-stone-500">Need a custom package? <a href="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Let's talk.</a></p>
                </div>
            </div>
        </section>
    );
}
