import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import wordmark from "@/assets/localway-wordmark.png";
import { SERVICES, WHATSAPP_URL, DIAGNOSTIC_MSG } from "./servicesData";
import { useState } from "react";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="LocalWay">
      <img
        src={wordmark}
        alt="LocalWay"
        className={`${className} w-auto object-contain dark:invert`}
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {SERVICES.map((s) => (
            <Link key={s.key} to={s.to} className="hover:text-foreground transition">
              {s.key === "ecommerce" ? "Loja Virtual" : s.title}
            </Link>
          ))}
          <a href="/#sobre" className="hover:text-foreground transition">Sobre</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Falar conosco
          </a>
        </div>
      </div>
    </header>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  accentText = "text-google-blue",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  accentText?: string;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-3 text-xs font-semibold uppercase tracking-wider ${accentText}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Presença digital para negócios locais. Fortaleza e Região Metropolitana.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Contato</div>
          <ul className="grid gap-2 text-muted-foreground">
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-whatsapp" /> <a href={WHATSAPP_URL} className="hover:text-foreground">+55 85 99430-7699</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:contato@localway.com.br" className="hover:text-foreground">contato@localway.com.br</a></li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> <a href="https://instagram.com/localwaybr" target="_blank" rel="noreferrer" className="hover:text-foreground">@localwaybr</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Serviços</div>
          <ul className="grid gap-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            {SERVICES.map((s) => (
              <li key={s.key}>
                <Link to={s.to} className="hover:text-foreground">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} LocalWay. Feito com cuidado em Fortaleza.</span>
          <span>Negócios locais, encontrados, lembrados e escolhidos.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(true);
  return (
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent(DIAGNOSTIC_MSG)}`}
      target="_blank" rel="noreferrer"
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp pl-3 pr-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:opacity-95"
    >
      <MessageCircle className="h-5 w-5" />
      <span className={open ? "inline" : "hidden sm:inline"}>Diagnóstico grátis</span>
    </a>
  );
}
