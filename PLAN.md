# Plan Transformacji E-Dźwigi (Next.js)

## 1. Analiza Stanu Obecnego vs Oryginał
| Element | Stan Obecny (AI Next.js) | Oryginał (e-dzwigi.pl) | Cel Zmiany |
|---------|--------------------------|------------------------|------------|
| **Motyw** | Dark Mode (Navy/Black) | Light Mode (White/Grey) | **Light Mode** (Biały/Szary + Czerwony Akcent) |
| **Hero** | Kinowy, "100T Badge" (brzydki) | Slider, konkretne info | Czysty, techniczny, bez zbędnych ozdobników |
| **Nawigacja** | Scroll-lock (irytujący) | Standardowa | Standardowa + Płynne przewijanie (bez blokad) |
| **Treść** | Angielski/Polski, Lorem Ipsum | Polski, Specjalistyczny | **100% Polski**, oryginalne teksty o firmie |
| **Funkcje** | Kalkulator (zbędny?) | Mapa, Oferta, Kontakt | Usunięcie kalkulatora, nacisk na Kontakt/Ofertę |

## 2. Harmonogram Prac

### Krok 1: Fundamenty (Global Styles)
- [ ] Zmiana zmiennych CSS w `globals.css` na jasny motyw.
- [ ] Ustalenie koloru wiodącego (Czerwony - Hydromont).
- [ ] Poprawa fontów (zachowanie czytelności).

### Krok 2: Sekcja Hero
- [ ] Nowy komponent `Hero.tsx`.
- [ ] Usunięcie animacji "badge".
- [ ] Wdrożenie nagłówka "Usługi Dźwigowe Hydromont".
- [ ] Dodanie przycisków CTA ("Zadzwoń", "Oferta").

### Krok 3: Sekcja O Nas (About)
- [ ] Wklejenie oryginalnego tekstu o firmie (30 lat doświadczenia, Tychy).
- [ ] Prosty, elegancki layout tekst + zdjęcie.

### Krok 4: Sekcja Flota (Fleet)
- [ ] Usunięcie `FleetStack.tsx` (scroll jack).
- [ ] Stworzenie `FleetGrid.tsx`: Przejrzysta siatka z kartami maszyn.
- [ ] Dane: Liebherr LTM 1030, LTM 1050, Podnośnik P-200.

### Krok 5: Kontakt i Stopka
- [ ] Dodanie danych firmowych (NIP, REGON, Adres).
- [ ] Mapa zasięgu (opcjonalnie, jeśli mamy grafikę/komponent).

### Krok 6: Czyszczenie
- [ ] Usunięcie `LiftCalculator.tsx` (chyba że klient zdecyduje inaczej).
- [ ] Sprawdzenie responsywności (Mobile/Desktop).
