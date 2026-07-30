import type { ReactNode } from "react";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { SiteHeader, SiteFooter, FloatingWhatsApp, SectionTitle } from "./SiteChrome";
import { OtherServices } from "./OtherServices";
import { getService, WHATSAPP_URL, DIAGNOSTIC_MSG, type ServiceKey } from "./servicesData";
import doodleAnalyze from "@/assets/doodle-step-analyze.png";
import doodlePlan from "@/assets/doodle-step-plan.png";
import doodleImplement from "@/assets/doodle-step-implement.png";
import doodleMonitor from "@/assets/doodle-step-monitor.png";
import doodleRocket from "@/assets/doodle-rocket.png";

const stepImgs = [doodleAnalyze, doodlePlan, doodleImplement, doodleMonitor];

export type ServicePageProps = {
  serviceKey: ServiceKey;
  eyebrow: string;
  headline: ReactNode;
  intro: string;
  heroImg: string;
  heroBullets: string[];
  benefits: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; text: string }[];
  problems: string[];
  results: string[];
  deliverables: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  ctaText: string;
};

export function ServicePage(props: ServicePageProps) {
  const s = getService(props.serviceKey);
  const wa = (msg: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 google-dots opacity-60" />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className={`h-3.5 w-3.5 ${s.text}`} />
                {props.eyebrow}
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                {props.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{props.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={wa(props.ctaText)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px] transition hover:opacity-95 ${s.bg} ${s.shadow}`}
                >
                  Receber diagnóstico gratuito <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-accent"
                >
                  <MessageCircle className="h-4 w-4 text-whatsapp" /> Falar com nossa equipe
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {props.heroBullets.map((b) => (
                  <span key={b} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-google-green" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className={`absolute -top-6 -left-4 h-24 w-24 rounded-full blur-2xl ${s.bgSoft}`} />
              <div className={`absolute -bottom-6 -right-2 h-32 w-32 rounded-full blur-2xl ${s.bgSoft}`} />
              <div className="paper-card relative p-4 md:p-6">
                <img src={props.heroImg} alt={s.title} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              accentText={s.text}
              eyebrow="Benefícios"
              title={<>O que muda no seu <span className="doodle-underline">dia a dia</span>.</>}
              subtitle="Sem termos técnicos. O resultado aparece no telefone tocando e no WhatsApp apitando."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {props.benefits.map((b) => (
                <div key={b.title} className="paper-card p-6">
                  <b.icon className={`h-7 w-7 ${s.text}`} strokeWidth={1.6} />
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sem × Com LocalWay */}
        <section className="border-y border-border bg-paper py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              center
              accentText={s.text}
              eyebrow="Sem LocalWay × Com LocalWay"
              title={<>A diferença é <span className={`font-hand text-5xl md:text-6xl ${s.text}`}>visível</span>.</>}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="paper-card p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sem LocalWay</span>
                </div>
                <ul className="grid gap-2 text-sm">
                  {props.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="paper-card p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-google-green" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Com LocalWay</span>
                </div>
                <ul className="grid gap-2 text-sm">
                  {props.results.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção em destaque no meio */}
        <OtherServices current={s.key} accentText={s.text} variant="middle" />

        {/* O que está incluso */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              accentText={s.text}
              eyebrow="O que está incluso"
              title={<>Tudo o que entregamos em <span className={`font-hand text-5xl md:text-6xl ${s.text}`}>{s.title}</span>.</>}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {props.deliverables.map((d) => (
                <div key={d.title} className={`paper-card p-5 ring-1 ${s.ring}`}>
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="border-y border-border bg-soft-blue/40 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              center
              accentText={s.text}
              eyebrow="Como funciona"
              title={<>Um processo <span className={`font-hand text-5xl md:text-6xl ${s.text}`}>simples</span>, do começo ao resultado.</>}
            />
            <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {props.steps.map((st, i) => (
                <div key={st.title} className="paper-card relative p-6">
                  <div className="absolute -top-4 left-6 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                    Passo 0{i + 1}
                  </div>
                  <div className="aspect-square w-full grid place-items-center bg-card rounded-xl overflow-hidden">
                    <img src={stepImgs[i % stepImgs.length]} alt={st.title} className="h-full w-full object-contain p-2" loading="lazy" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{st.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{st.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5">
            <SectionTitle
              center
              accentText={s.text}
              eyebrow="Dúvidas frequentes"
              title={<>Perguntas que a gente <span className="doodle-underline">sempre ouve</span>.</>}
            />
            <div className="mt-12 grid gap-4">
              {props.faq.map((f) => (
                <div key={f.q} className="paper-card p-6">
                  <h3 className="text-lg font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
              <div className={`absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl ${s.bgSoft}`} />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-google-yellow/30 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    Vamos começar pelo{" "}
                    <span className={`font-hand text-5xl md:text-7xl ${s.text}`}>diagnóstico</span>?
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                    Descubra oportunidades que sua empresa pode estar perdendo neste momento.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={wa(props.ctaText)}
                      target="_blank" rel="noreferrer"
                      className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:opacity-95 ${s.bg}`}
                    >
                      Receber diagnóstico gratuito <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={wa(DIAGNOSTIC_MSG)}
                      target="_blank" rel="noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                    </a>
                  </div>
                </div>
                <div className="grid place-items-center">
                  <img src={doodleRocket} alt="Pronto para decolar" className="w-full max-w-sm h-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção em destaque no final */}
        <OtherServices current={s.key} accentText={s.text} variant="end" />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
