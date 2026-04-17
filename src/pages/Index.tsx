import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Compass, Layers, Route, BarChart3, Sparkles, LineChart } from "lucide-react";
import { useEffect } from "react";

const services = [
  { icon: Compass, title: "Digital marketing strategi & prioritering", body: "Klar retning for e-commerce, marketing og digitale kundeoplevelser — forankret i forretningens mål og økonomi." },
  { icon: Layers, title: "Digital modenhed & organisation", body: "Vurdering af kompetencer, processer og teknologi — så I bygger en organisation, der kan eksekvere." },
  { icon: Route, title: "Kunderejser & e-commerce", body: "Sammenhæng mellem brand, kanaler og konvertering på tværs af berøringspunkter." },
  { icon: BarChart3, title: "Performance & måling", body: "Fra data til beslutninger: KPI'er, attribution og styring der faktisk bruges." },
  { icon: Sparkles, title: "AI i marketing & e-commerce", body: "Pragmatisk anvendelse af AI til indhold, personalisering og effektivisering." },
  { icon: LineChart, title: "Sparring til ledelse & bestyrelse", body: "Ekstern rådgiver der oversætter digitale muligheder til forretningssprog." },
];

const principles = [
  { n: "01", t: "Forretning før teknologi", b: "Digitale valg skal tjene strategien — ikke omvendt." },
  { n: "02", t: "Færre, men bedre valg", b: "Prioritering frem for fragmenterede initiativer uden retning, eller værdifulde løsninger." },
  { n: "03", t: "Effekt frem for aktivitet", b: "Succes måles på resultater i bundlinjen — ikke på antal projekter." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Moldt Consulting — Strategisk digital rådgivning";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "Strategisk digital rådgivning til ledelse: prioritering, retning og målbar effekt på e-commerce, marketing og teknologi.");
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative container-wide pt-28 pb-32 md:pt-40 md:pb-48">
          <p className="reveal text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Strategisk digital rådgivning
          </p>
          <h1 className="reveal reveal-delay-1 font-serif text-5xl md:text-7xl leading-[1.05] text-balance max-w-4xl">
            Klarhed, prioritering og <em className="not-italic text-accent">målbar effekt</em> på jeres digitale forretning.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg text-muted-foreground text-balance">
            Jeg hjælper ledelse og beslutningstagere med at skære ind til kernen, vælge de rigtige indsatser og omsætte digital- og marketing ambitioner til reel vækst — uden støj eller overkompleksitet.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:opacity-90"
            >
              Tag en uforpligtende dialog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#ydelser"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition-colors"
            >
              Se ydelser
            </a>
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-wide py-20 md:py-28 grid md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-4 text-sm tracking-widest uppercase text-muted-foreground">Tilgang</p>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl md:text-3xl leading-snug text-balance">
              Mange virksomheder investerer i digitale marketing initiativer uden klar sammenhæng mellem strategi, kundeoplevelse og bundlinje. Min rolle er ikke at gøre det hele —
              <span className="text-accent"> men at sikre, at I gør det rigtige.</span>
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {principles.map((p) => (
                <div key={p.n}>
                  <p className="font-serif text-3xl text-accent">{p.n}</p>
                  <p className="mt-3 font-medium">{p.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YDELSER */}
      <section id="ydelser" className="py-24 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Strategiske fokusområder</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Rådgivning der forbinder forretning, kunder og teknologi.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {services.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group bg-background p-8 transition-colors hover:bg-secondary/50"
              >
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32 text-center">
          <p className="text-sm tracking-widest uppercase opacity-60 mb-8">Filosofi</p>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-balance">
            “Min succes måles på <em className="not-italic text-accent">mine kunders succes.</em>”
          </blockquote>
          <p className="mt-8 text-sm opacity-70">— Sune Moldt</p>
        </div>
      </section>

      {/* SAMARBEJDE */}
      <section className="py-24 md:py-32">
        <div className="container-wide grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Samarbejde</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Ærlig sparring. Tydelige anbefalinger.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg leading-relaxed">
            <p>
              Et samarbejde med Moldt Consulting er kendetegnet ved fokus på det, der skaber mest værdi — og en vilje til at udfordre antagelser, når det er nødvendigt.
            </p>
            <ul className="space-y-4 border-l-2 border-accent pl-6">
              <li><span className="font-medium">Ekstern strategisk rådgiver</span> for ledelse og bestyrelse.</li>
              <li><span className="font-medium">Sparringspartner</span> for marketing- og digitalt ansvarlige.</li>
              <li><span className="font-medium">Bindeled</span> mellem forretning, marketing og teknik.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border" style={{ background: "var(--gradient-warm)" }}>
        <div className="container-prose py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            Lad os tale om jeres digitale retning.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            En uforpligtende samtale om, hvordan I skaber en mere sammenhængende marketing.
          </p>
          <Link
            to="/kontakt"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book en samtale
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
