import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Showcase } from "@/components/marketing/Showcase";
import { LingerPlus } from "@/components/marketing/LingerPlus";
import { About } from "@/components/marketing/About";
import { FAQ } from "@/components/marketing/FAQ";
import { Footer } from "@/components/marketing/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-ink text-foreground">
      <Hero />
      <Features />
      <Showcase />
      <LingerPlus />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
