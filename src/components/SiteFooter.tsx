import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Moldt Consulting</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Strategisk digital rådgivning, der forbinder forretning, kunder og teknologi.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground mb-3">Navigation</p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent">Forside</Link></li>
            <li><Link to="/om" className="hover:text-accent">Om Sune</Link></li>
            <li><Link to="/kontakt" className="hover:text-accent">Kontakt</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground mb-3">Kontakt</p>
          <ul className="space-y-2">
            <li><a href="mailto:sune@moldtconsulting.dk" className="hover:text-accent">sune@moldtconsulting.dk</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Moldt Consulting. Alle rettigheder forbeholdes.</p>
          <p>CVR · Danmark</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
