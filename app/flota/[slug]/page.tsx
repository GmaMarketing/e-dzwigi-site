import { fleet } from "@/data/fleet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return fleet.map((machine) => ({
    slug: machine.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const machine = fleet.find((m) => m.slug === slug);
  if (!machine) return {};

  const title = `${machine.model} – ${machine.type} do wynajmu | e-dzwigi.pl`;
  const description = `${machine.model} – ${machine.type}, udźwig ${machine.specs.liftingCapacity}, wysięgnik ${machine.specs.boomLength}. Wynajem na Śląsku. Sprawdź dostępność: 508 313 906`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://e-dzwigi.pl/flota/${machine.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://e-dzwigi.pl/flota/${machine.slug}`,
      type: "website",
      locale: "pl_PL",
      images: [
        {
          url: machine.image,
          alt: machine.model,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [machine.image],
    },
  };
}

export default async function MachinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const machine = fleet.find((m) => m.slug === slug);

  if (!machine) {
    notFound();
  }

  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
                src={machine.image}
                alt={machine.model}
                fill
                className="object-cover opacity-40"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-amber-400 font-bold tracking-widest uppercase mb-4 block">Specyfikacja Techniczna</span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">{machine.model}</h1>
            <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-mono">{machine.type}</span>
                <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-bold uppercase tracking-widest">Dostępny</span>
            </div>
        </div>
      </section>

      <div className="flex-grow container mx-auto px-6 py-20">
        
        <Link href="/#flota" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-12 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} />
            Powrót do floty
        </Link>

        <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                
                {/* Description */}
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-amber-500 rounded-full" />
                        Opis Maszyny
                    </h2>
                    <p className="text-lg text-zinc-900 leading-relaxed">
                        {machine.description}
                    </p>
                </div>

                {/* Specs Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8">Parametry Techniczne</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(machine.specs).map(([key, value]) => (
                            <div key={key} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
                                <span className="text-zinc-400 text-sm font-bold uppercase tracking-wider">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-zinc-900 font-heading font-black text-xl">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diagrams */}
                {machine.diagrams.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Diagramy Udźwigu</h2>
                        <div className="space-y-8">
                            {machine.diagrams.map((diag, i) => (
                                <div key={i} className="bg-white p-4 rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
                                    <Image
                                        src={diag}
                                        alt={`Diagram ${machine.model} ${i + 1}`}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gallery */}
                {machine.gallery.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Galeria Zdjęć</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {machine.gallery.map((img, i) => (
                                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                                    <Image
                                        src={img}
                                        alt={`${machine.model} gallery ${i}`}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                
                {/* Contact Card */}
                <div className="text-white p-8 rounded-3xl shadow-xl sticky top-32 z-10" style={{backgroundColor: '#1e2535'}}>
                    <h3 className="text-xl font-bold mb-2">Zainteresowany?</h3>
                    <p className="text-white text-sm mb-8">Skontaktuj się z nami, aby sprawdzić dostępność i cenę wynajmu.</p>
                    
                    <a href="tel:+48508313906" className="block w-full py-4 bg-amber-500 hover:bg-white hover:text-amber-500 text-center rounded-xl font-bold uppercase tracking-widest transition-all mb-4">
                        Zadzwoń Teraz
                    </a>
                    <Link href="/kontakt#formularz" className="block w-full py-4 border border-white/20 hover:bg-white hover:text-zinc-900 text-center rounded-xl font-bold uppercase tracking-widest transition-all">
                        Formularz
                    </Link>
                </div>

            </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
