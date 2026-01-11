import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeaturedGalleries } from "@/components/home/FeaturedGalleries";
import { Packages } from "@/components/home/Packages";
import { ClientStories } from "@/components/home/ClientStories";
import { Journal } from "@/components/home/Journal";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">

      <Hero />
      <FeaturedGalleries />
      <Packages />
      <ClientStories />
      <Journal />

    </div>
  );
}
