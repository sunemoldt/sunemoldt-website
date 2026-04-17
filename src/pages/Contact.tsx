import { useEffect, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = "Kontakt — Moldt Consulting";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "Kontakt Sune Moldt for en uforpligtende dialog om jeres digitale strategi, prioritering og vækst.");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Henvendelse fra ${data.get("name")}`);
    const body = encodeURIComponent(
      `Navn: ${data.get("name")}\nVirksomhed: ${data.get("company")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:sune@moldtconsulting.dk?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Åbner din e-mail-klient…");
    }, 400);
  };

  return (
    <SiteLayout>
      <section className="container-wide pt-20 md:pt-28 pb-16">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">Kontakt</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance max-w-4xl">
          Lad os tage en uforpligtende dialog.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Beskriv kort jeres situation eller udfordring — så vender jeg tilbage inden for 1–2 hverdage.
        </p>
      </section>

      <section className="container-wide pb-24 grid lg:grid-cols-12 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Navn" name="name" required />
            <Field label="Virksomhed" name="company" />
          </div>
          <Field label="E-mail" name="email" type="email" required />
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Besked</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors resize-none"
              placeholder="Hvad er på jeres bord lige nu?"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {sending ? "Sender…" : "Send besked"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <aside className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12 space-y-8">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Direkte kontakt</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent" strokeWidth={1.5} />
                <a href="mailto:sune@moldtconsulting.dk" className="hover:text-accent">sune@moldtconsulting.dk</a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 mt-0.5 text-accent" strokeWidth={1.5} />
                <a href="https://www.linkedin.com/in/sunemoldt/" target="_blank" rel="noreferrer" className="hover:text-accent">linkedin.com/in/sunemoldt</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" strokeWidth={1.5} />
                <span>Danmark — arbejder på tværs af landet</span>
              </li>
            </ul>
          </div>
          <div className="rounded-md bg-secondary/60 p-6">
            <p className="font-serif text-lg">Foretrækker du at tale?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Foreslå en tid via e-mail, så finder vi 30 minutter i kalenderen til en uformel snak.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
};

const Field = ({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-sm text-muted-foreground mb-2">{label}{required && " *"}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 transition-colors"
    />
  </div>
);

export default Contact;
