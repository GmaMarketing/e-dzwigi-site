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
  "Sosnowiec",
  "Jaworzno",
  "Mysłowice",
  "Mikołów",
  "Pszczyna",
  "Bieruń",
  "Łaziska Górne",
  "Lędziny",
  "Orzesze",
  "Imielin",
  "Bojszowy",
  "Wyry",
  "Ornontowice",
  "Chełm Śląski",
];

const polandCenter = createCoordinates(19.5, 52);
const tychyCoordinates = createCoordinates(18.99, 50.12);

export function ServiceMap() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{backgroundColor: '#1e2535'}} id="zasieg">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8" style={{backgroundColor: '#2d3748', border: '1px solid #4a5568'}}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              Obszar działania
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-8 leading-tight">
            DOCIERAMY TAM <br /> GDZIE INNI <br /> <span className="text-amber-500">NIE MOGĄ</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-md" style={{color: '#e5e7eb'}}>
            Baza w Tychach, obsługujemy Katowice, Mysłowice, Jaworzno, Mikołów, Pszczynę i wszystkie
            miejscowości w promieniu 25km - zazwyczaj jesteśmy na miejscu w 30-40 minut.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{backgroundColor: '#2d3748', border: '1px solid #4a5568'}}>
              <Clock className="text-amber-500 shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-white text-sm uppercase">
                  Szybka Reakcja
                </span>
                <span className="text-xs" style={{color: '#cbd5e0'}}>Dojazd 24/7 na wezwanie</span>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl" style={{backgroundColor: '#2d3748', border: '1px solid #4a5568'}}>
              <ShieldCheck className="text-amber-500 shrink-0 mt-1" />
              <div>
                <span className="block font-bold text-white text-sm uppercase">
                  Bezpieczeństwo
                </span>
                <span className="text-xs" style={{color: '#cbd5e0'}}>Pełne ubezpieczenie usług</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1 text-white text-xs font-bold uppercase tracking-wide rounded-md"
                style={{backgroundColor: '#2d3748', border: '1px solid #4a5568'}}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl p-4 md:p-8 flex items-center justify-center overflow-hidden" style={{backgroundColor: '#2d3748', border: '1px solid #4a5568'}}>

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
                            fill: isSilesia ? "#F59E0B" : "#4a5568",
                            stroke: "#1e2535",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          hover: {
                            fill: isSilesia ? "#FBBF24" : "#6b7280",
                            stroke: "#1e2535",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          pressed: {
                            fill: isSilesia ? "#F59E0B" : "#4a5568",
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
                  <circle r={8} fill="#F59E0B" stroke="#1e2535" strokeWidth={2} className="animate-pulse opacity-50" />
                  <circle r={4} fill="#F59E0B" stroke="#1e2535" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={-15}
                    className="font-sans font-bold text-[10px] uppercase tracking-wider"
                    style={{ fill: '#ffffff', textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
                  >
                    Tychy
                  </text>
                </g>
              </Marker>
            </ComposableMap>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
            <div className="px-4 py-3 rounded-xl shadow-lg" style={{backgroundColor: '#1e2535', border: '1px solid #4a5568'}}>
              <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{color: '#cbd5e0'}}>
                Baza Główna
              </span>
              <div className="flex items-center gap-2 font-mono font-bold text-sm text-white">
                <MapPin size={14} className="text-amber-500" />
                Tychy, ul. Dojazdowa 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
