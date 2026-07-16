import { Helmet } from "react-helmet-async";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const MAIL = "sune@sunemoldt.dk";
const LINKEDIN = "https://www.linkedin.com/in/sunemoldt/";

const Visitkort = () => {
  return (
    <>
      <Helmet>
        <title>Sune Moldt | Digital Strateg</title>
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Sune Moldt | Digital Strateg" />
        <meta
          property="og:description"
          content="Digital strateg fra Aabenraa. E-commerce, marketing og teknologi der binder marketing, IT og salg sammen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:locale" content="da_DK" />
      </Helmet>

      <div className="visitkort-root min-h-svh flex flex-col relative overflow-x-hidden">
        {/* warm radial backdrop */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(110% 75% at 88% -5%, rgba(201,168,76,.15), transparent 55%), radial-gradient(80% 60% at -5% 105%, rgba(201,168,76,.08), transparent 55%)",
          }}
        />
        {/* subtle noise */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <main className="wrap relative z-[2] flex-1 w-full max-w-[1000px] mx-auto flex flex-col justify-center"
          style={{ padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,6vw,5rem)" }}
        >
          <div className="vk-card">

            <h1 className="vk-name">
              Sune <em>Moldt</em>
            </h1>

            <div className="pic">
              <img
                src={`/sune-portrait.jpg?v=${Date.now()}`}
                alt="Sune Moldt portræt"
                loading="eager"
              />
            </div>

            <p className="tagline">
              AI, Digital Marketing & E-commerce. Værdien skabes i <strong>snitfladen mellem marketing, tech og salg</strong>.
            </p>

            <p className="note">
              Det her domæne bruger jeg mest til mail. Men når du nu er landet her — så er der to veje videre.
            </p>

            <div className="links">
              <a className="vk-btn primary" href={`mailto:${MAIL}`}>
                <Mail size={18} strokeWidth={1.7} />
                Skriv til mig
                <ArrowUpRight size={14} className="arrow" />
              </a>
              <a className="vk-btn ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={14} className="arrow" />
              </a>
            </div>
          </div>
        </main>

        <footer className="relative z-[2] w-full max-w-[1000px] mx-auto"
          style={{ padding: "1.4rem clamp(1.5rem,6vw,5rem)" }}
        >
          <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center text-[0.8rem]" style={{ color: "var(--vk-ink-faint)", borderTop: "1px solid var(--vk-paper-2)", paddingTop: "1.4rem" }}>
            <div>© {new Date().getFullYear()} Sune Moldt</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Visitkort;
