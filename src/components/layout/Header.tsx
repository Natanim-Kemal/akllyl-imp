
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
    {
        label: "Portfolio",
        href: "/portfolio",
        children: [
            { label: "Weddings", href: "/portfolio/weddings" },
            { label: "Portraits", href: "/portfolio/portraits" },
            { label: "Events", href: "/portfolio/events" },
            { label: "Commercial", href: "/portfolio/commercial" },
        ],
    },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "Pricing", href: "/services/pricing" },
            { label: "Packages", href: "/services/packages" },
            { label: "FAQ", href: "/services/faq" },
        ],
    },
    {
        label: "About Us",
        href: "/about",
        children: [
            { label: "Our Team", href: "/about/team" },
            { label: "Location", href: "/about/location" },
            { label: "Testimonials", href: "/about/testimonials" },
        ],
    },
    { label: "Blog", href: "/blog" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl text-black font-bold tracking-tight font-[family-name:var(--font-outfit)] relative z-50">
                    Akllyl
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
                                onClick={(e) => { if (item.children) e.preventDefault() }}
                            >
                                {item.label}
                                {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
                            </Link>

                            {/* Dropdown */}
                            {item.children && (
                                <div
                                    className={cn(
                                        "absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-sm overflow-hidden transition-all duration-200 ease-in-out",
                                        activeDropdown === item.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                                    )}
                                >
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            className="block px-4 py-3 text-sm hover:bg-stone-50 hover:text-[var(--color-primary)] transition-colors border-b border-stone-50 last:border-0"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button asChild variant="brand" className="rounded-full px-6">
                        <Link href="/book">
                            Book Now
                        </Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 relative z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 overflow-y-auto p-6 md:hidden flex flex-col pt-20">
                    <div className="flex flex-col gap-6">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label}>
                                <Link
                                    href={item.href}
                                    className="block text-2xl font-bold py-2 border-b border-stone-100 font-[family-name:var(--font-outfit)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className="pl-4 flex flex-col gap-3 mt-3">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="text-stone-500 text-lg py-1 block font-medium"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="mt-8">
                            <Button asChild variant="brand" className="w-full rounded-full py-6 text-lg font-bold shadow-lg">
                                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                    Book Your Session
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
