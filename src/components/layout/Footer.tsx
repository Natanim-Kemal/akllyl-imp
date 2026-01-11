import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-stone-900 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold font-[family-name:var(--font-outfit)] mb-6">Akllyl</h2>
                        <p className="text-lg font-medium leading-relaxed opacity-90">
                            Capturing the essence of your most precious moments with artistic vision and technical excellence.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-outfit)]">Explore</h3>
                        <ul className="space-y-4 font-medium">
                            <li><Link href="/portfolio" className="hover:opacity-70 transition-opacity">Portfolio</Link></li>
                            <li><Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link></li>
                            <li><Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link></li>
                            <li><Link href="/blog" className="hover:opacity-70 transition-opacity">Journal</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-outfit)]">Contact</h3>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                                <span>123 Studio Ave, Creative District<br />City, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a href="mailto:hello@akllyl.com" className="hover:underline">hello@akllyl.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0" />
                                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-outfit)]">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-stone-900 text-[var(--color-primary)] rounded-full hover:bg-stone-800 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-stone-900 text-[var(--color-primary)] rounded-full hover:bg-stone-800 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-stone-900 text-[var(--color-primary)] rounded-full hover:bg-stone-800 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-900/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium opacity-80">
                    <p>&copy; {new Date().getFullYear()} Akllyl Studio. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
