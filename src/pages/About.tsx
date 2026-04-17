import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import portrait from "@/assets/sune-portrait.jpg";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <SiteLayout>
      <Seo
        title="Om Sune Moldt — Strategisk digital sparring | Moldt Consulting"
        description="Mød Sune Moldt: digital- og marketingrådgiver med fokus på prioritering, kundeoplevelse og målbar effekt for ledelse og bestyrelse."
        path="/om"
      />
      <section className="container-wide pt-20 md:pt-28 pb-16">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">Om</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance max-w-4xl">
          Strategisk sparring fra en, der har stået i det selv.
        </h1>
      </section>

      <section className="container-wide pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-md shadow-[var(--shadow-elev)]">
            <img
              src={portrait}
              alt="Portræt af Sune Moldt"
              width={1024}
              height={1280}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="mt-6">
            <p className="font-serif text-xl">Sune Moldt</p>
            <p className="text-sm text-muted-foreground">Digital- & marketingspecialist</p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            Jeg har brugt min karriere på at hjælpe virksomheder med at få mere ud af deres digitale marketing investeringer. Med rødder i digital marketing, e-commerce og forretningsudvikling oversætter jeg tekniske muligheder til konkrete forretningsbeslutninger.
          </p>
          <p>
            Min rådgivning bygger på <span className="font-medium">forretningsforståelse, kundefokus og solidt købmandskab</span> — ikke trends for trendens skyld. Jeg arbejder tæt sammen med ledelse og nøglepersoner for at skabe fælles retning, udfordre antagelser og sikre, at digitale investeringer understøtter både vækst og drift.
          </p>
          <p>
            Min styrke er at gøre komplekse problemstillinger konkrete og beslutningsbare — så I kan handle hurtigt og med mindre risiko.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-24">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Hvad jeg tror på</p>
            <h2 className="font-serif text-3xl md:text-4xl text-balance">
              Færre kompromiser. Skarpere prioritering.
            </h2>
          </div>
          <div className="space-y-6 text-lg">
            <p>Jeg fungerer ofte som <span className="font-medium">ekstern strategisk rådgiver</span> — en uafhængig stemme, der ikke har en bestemt platform eller leverance at sælge ind til.</p>
            <p>Det giver plads til de svære spørgsmål, og det gør anbefalingerne reelle. Mit mål er, at I træffer beslutninger, har en plan, I står ved — også i fremtiden.</p>
          </div>
        </div>
      </section>

      <section className="container-prose py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-balance">
          Skal vi tage en samtale?
        </h2>
        <Link
          to="/kontakt"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Skriv til mig
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
};

export default About;
