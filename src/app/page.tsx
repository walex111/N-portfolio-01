import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-10">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <Experience />
      </section>
    </main>
  );
}
