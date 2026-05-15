"use client";

import { MapPin, Clock, ShieldCheck } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  createCoordinates,
} from "@vnedyalk0v/react19-simple-maps";
import polandGeo from "../data/poland-provinces.json";

const cities = [
  "Tychy",
  "Katowice",
  "Gliwice",
  "Sosnowiec",
  "Bielsko-Biała",
  "Rybnik",
  "Dąbrowa Górnicza",
  "Chorzów",
];

const polandCenter = createCoordinates(19.5, 52);
const tychyCoordinates = createCoordinates(18.99, 50.12);

export function ServiceMap() {
  return (
    <section className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden" id="zasieg">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-red-100 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Obszar działania
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 mb-8 leading-tight">
            DOCIERAMY TAM <br /> GDZIE INNI <br /> <span className="text-red-600">NIE MOGĄ</span>
          </h2>

          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md">
            Baza w Tychach, zasięg na cały Śląsk. Dojazd do Katowic, Gliwic, Sosnowca,
            Rybnika i okolic - zazwyczaj poniżej 60 minut.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
              <Clock className="text-red-600 shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-zinc-900 text-sm uppercase">
                  Szybka Reakcja
                </span>
                <span className="text-xs text-zinc-500">Dojazd 24/7 na wezwanie</span>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
              <ShieldCheck className="text-red-600 shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-zinc-900 text-sm uppercase">
                  Bezpieczeństwo
                </span>
                <span className="text-xs text-zinc-500">Pełne ubezpieczenie usług</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wide rounded-md"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full bg-white rounded-3xl border border-zinc-200 shadow-2xl p-4 md:p-8 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

          <div className="w-full h-full">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 3500,
                center: polandCenter,
              }}
              className="w-full h-full"
            >
              <Geographies geography={polandGeo}>
                {({ geographies }) =>
                  geographies.map((geo, i) => {
                    const isSilesia =
                      geo.properties.name === "Silesian" ||
                      geo.properties.name === "Śląskie" ||
                      geo.properties["hc-key"] === "pl-sl";

                    return (
                      <Geography
                        key={geo.rsmKey || `geo-${i}`}
                        geography={geo}
                        style={{
                          default: {
                            fill: isSilesia ? "#fee2e2" : "#f4f4f5",
                            stroke: isSilesia ? "#dc2626" : "#e4e4e7",
                            strokeWidth: isSilesia ? 2 : 1,
                            outline: "none",
                          },
                          hover: {
                            fill: isSilesia ? "#fecaca" : "#e4e4e7",
                            stroke: isSilesia ? "#dc2626" : "#a1a1aa",
                            strokeWidth: 2,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#e4e4e7",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              <Marker coordinates={tychyCoordinates}>
                <g className="group cursor-pointer">
                  <circle r={8} fill="#dc2626" stroke="#fff" strokeWidth={2} className="animate-pulse opacity-50" />
                  <circle r={4} fill="#dc2626" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={-15}
                    className="font-sans font-bold text-[10px] fill-zinc-900 uppercase tracking-wider bg-white"
                    style={{ textShadow: "0px 2px 4px rgba(255,255,255,1)" }}
                  >
                    Tychy
                  </text>
                </g>
              </Marker>
            </ComposableMap>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
            <div className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl border border-zinc-200 shadow-lg">
              <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                Baza Główna
              </span>
              <div className="flex items-center gap-2 text-zinc-900 font-mono font-bold text-sm">
                <MapPin size={14} className="text-red-600" />
                Tychy, ul. Dojazdowa 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
