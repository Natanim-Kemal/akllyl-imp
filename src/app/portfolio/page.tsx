import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
    const galleries = [
        { title: "Weddings", count: 12, src: "https://picsum.photos/seed/wedding_cover/800/1000" },
        { title: "Portraits", count: 8, src: "https://picsum.photos/seed/portrait_cover/800/1000" },
        { title: "Events", count: 15, src: "https://picsum.photos/seed/event_cover/800/1000" },
        { title: "Commercial", count: 5, src: "https://picsum.photos/seed/comm_cover/800/1000" },
        { title: "Travel", count: 9, src: "https://picsum.photos/seed/travel_cover/800/1000" },
        { title: "Studio", count: 20, src: "https://picsum.photos/seed/studio_cover/800/1000" },
    ];

    return (
        <div className="pt-32 pb-24 container-custom min-h-screen">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-stone-500 mb-16 max-w-2xl">
                A curated collection of our favorite moments. Each gallery represents a unique story told through our lens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleries.map((gallery, i) => (
                    <Link href={`/portfolio/${gallery.title.toLowerCase()}`} key={i} className="group block">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200 mb-4">
                            <Image
                                src={gallery.src}
                                alt={gallery.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                        <div className="flex justify-between items-baseline">
                            <h2 className="text-2xl font-bold group-hover:text-[var(--color-primary)] transition-colors">{gallery.title}</h2>
                            <span className="text-sm font-medium text-stone-400">{gallery.count} Sets</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
