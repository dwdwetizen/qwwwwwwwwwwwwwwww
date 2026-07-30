import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  MapPin,
  Instagram,
  Mail,
  Search,
  Globe,
  ShoppingBag,
  Smartphone,
  Palette,
  Nfc,
  TrendingUp,
  Network,
  Gift,
  Clock,
  Target,
  Headphones,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

import heroImg from "@/assets/doodle-google-business.png";
import ecosystemImg from "@/assets/ecosystem.png";
import aboutImg from "@/assets/about-team.png";
import mapImg from "@/assets/map-fortaleza.png";
import fernandaImg from "@/assets/team-fernanda.png";
import ricardoImg from "@/assets/team-ricardo.png";
import segRestaurante from "@/assets/seg-restaurante.png";
import segClinica from "@/assets/seg-clinica.png";
import segOficina from "@/assets/seg-oficina.png";
import segBarbearia from "@/assets/seg-barbearia.png";
import segLoja from "@/assets/seg-loja.png";
import segPrestador from "@/assets/seg-prestador.png";
import wordmark from "@/assets/localway-wordmark.png";
import doodleGoogle from "@/assets/doodle-google-business.png";
import doodleReviews from "@/assets/doodle-reviews.png";
import doodleWhats from "@/assets/doodle-whatsapp.png";
import doodleAnalyze from "@/assets/doodle-step-analyze.png";
import doodlePlan from "@/assets/doodle-step-plan.png";
import doodleImplement from "@/assets/doodle-step-implement.png";
import doodleMonitor from "@/assets/doodle-step-monitor.png";
import doodleRocket from "@/assets/doodle-rocket.png";
import doodleMegaphone from "@/assets/doodle-megaphone.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LocalWay — Presença digital para negócios locais" },
      {
        name: "description",
        content:
          "Ajudamos empresas locais a serem encontradas no Google, no WhatsApp e na sua região. Diagnóstico gratuito.",
      },
      { property: "og:title", content: "LocalWay — Presença digital para negócios locais" },
      {
        property: "og:description",
        content: "Visibilidade, Google Meu Negócio, site, WhatsApp e loja online para empresas de Fortaleza e região.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5585994307699";
const DIAGNOSTIC_MSG = "Olá! Quero receber o diagnóstico gratuito da LocalWay.";

function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="LocalWay">
      <img
        src={wordmark}
        alt="LocalWay"
        className={`${className} w-auto object-contain dark:invert`}
      />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/google-meu-negocio" className="hover:text-foreground transition">Google Meu Negócio</Link>
          <Link to="/criacao-de-sites" className="hover:text-foreground transition">Criação de Sites</Link>
          <Link to="/loja-virtual" className="hover:text-foreground transition">Loja Virtual</Link>
          <Link to="/trafego-pago" className="hover:text-foreground transition">Tráfego Pago</Link>
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 google-dots opacity-60" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-google-yellow" />
            Diagnóstico gratuito para o seu negócio
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Sua empresa já faz um<br />
            <span className="doodle-underline">bom trabalho</span>.
            <br />
            Agora ela precisa{" "}
            <span className="font-hand text-google-blue text-5xl md:text-6xl lg:text-7xl">
              ser encontrada.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ajudamos empresas locais a fortalecer sua presença digital, aumentar sua visibilidade e atrair mais oportunidades — no Google, no WhatsApp e na sua região.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(DIAGNOSTIC_MSG)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-google-blue px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px] shadow-google-blue/60 transition hover:opacity-95"
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
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-google-green" /> Sem mensalidade obrigatória</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-google-green" /> Pagamento após aprovação</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-4 h-24 w-24 rounded-full bg-google-yellow/30 blur-2xl" />
          <div className="absolute -bottom-6 -right-2 h-32 w-32 rounded-full bg-google-blue/20 blur-2xl" />
          <div className="paper-card relative p-4 md:p-6">
            <img src={heroImg} alt="Empresário sendo encontrado no Google" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-3 text-xs font-semibold uppercase tracking-wider text-google-blue`}>
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

function Comparator() {
  return (
    <section className="border-y border-border bg-soft-blue/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          center
          eyebrow="Sem LocalWay × Com LocalWay"
          title={
            <>
              O problema nem sempre é o{" "}
              <span className="font-hand text-google-red text-5xl md:text-6xl">seu serviço</span>.
            </>
          }
          subtitle="Arraste para comparar. Muitos negócios excelentes simplesmente não estão sendo encontrados."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <BeforeAfterSlider />
          <div className="grid gap-4">
            {[
              { side: "antes", items: ["Empresa invisível no Google", "Pouca visibilidade local", "Poucos contatos no WhatsApp", "Perfil incompleto ou desatualizado", "Visual apagado e sem identidade"] },
              { side: "depois", items: ["Empresa encontrada no Maps", "Aparece nas buscas locais", "Mais contatos qualificados todo dia", "Google Meu Negócio completo", "Visual profissional e confiável"] },
            ].map((col) => (
              <div key={col.side} className="paper-card p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${
                      col.side === "antes" ? "bg-muted-foreground" : "bg-google-green"
                    }`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {col.side === "antes" ? "Sem LocalWay" : "Com LocalWay"}
                  </span>
                </div>
                <ul className="grid gap-2 text-sm">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      {col.side === "antes" ? (
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      ) : (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                      )}
                      <span className={col.side === "antes" ? "text-muted-foreground" : "text-foreground"}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: MapPin, color: "bg-google-blue", title: "Google Meu Negócio", text: "Perfil completo, otimizado e atualizado para aparecer no Maps e na busca." },
  { icon: Globe, color: "bg-google-red", title: "Site Profissional", text: "Um site rápido, claro e que converte visitantes em contatos reais." },
  { icon: MessageCircle, color: "bg-google-green", title: "WhatsApp", text: "Atendimento configurado para responder rápido e fechar mais." },
  { icon: ShoppingBag, color: "bg-google-yellow", title: "Loja Online", text: "Venda no seu próprio canal, sem depender só das redes sociais." },
  { icon: Palette, color: "bg-google-blue", title: "Identidade Visual", text: "Logotipo, cores e padrões que transmitem confiança." },
  { icon: Nfc, color: "bg-google-red", title: "Plaquinhas NFC", text: "Aproxime o celular e o cliente já avalia, segue ou contrata." },
  { icon: TrendingUp, color: "bg-google-green", title: "SEO", text: "Aparecer nas buscas certas, para as pessoas certas, na hora certa." },
  { icon: Search, color: "bg-google-yellow", title: "Presença Digital", text: "Tudo conectado: você é encontrado, lembrado e escolhido." },
];

function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Os ingredientes"
          title={
            <>
              O que faz um negócio ser <span className="doodle-underline">encontrado</span>.
            </>
          }
          subtitle="Não é mágica. É uma combinação clara de elementos — e a gente cuida de todos eles."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="paper-card group p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className={`grid h-11 w-11 place-items-center rounded-xl text-white ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-y border-border bg-paper py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Ecossistema digital"
            title={
              <>
                Tudo funciona melhor quando está{" "}
                <span className="font-hand text-google-blue text-5xl md:text-6xl">conectado</span>.
              </>
            }
            subtitle="Google, site, WhatsApp, redes sociais e loja online não são canais isolados. Quando conversam entre si, o seu negócio cresce de forma consistente."
          />
          <ul className="mt-6 grid gap-3 text-sm">
            {[
              ["Google", "te coloca no mapa"],
              ["Site", "explica o que você faz"],
              ["WhatsApp", "fecha a conversa"],
              ["Loja online", "transforma em venda"],
              ["Redes sociais", "lembram quem é você"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center gap-3">
                <Network className="h-4 w-4 text-google-blue" />
                <span><span className="font-semibold">{k}</span> <span className="text-muted-foreground">{v}.</span></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="paper-card p-4 md:p-6">
          <img src={ecosystemImg} alt="Ecossistema digital conectado" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

const segments = [
  { img: segRestaurante, title: "Restaurantes", color: "bg-google-red/10 ring-google-red/30", text: "Mais reservas, avaliações e visitas." },
  { img: segClinica, title: "Clínicas", color: "bg-google-green/10 ring-google-green/30", text: "Agenda cheia e pacientes que confiam." },
  { img: segOficina, title: "Oficinas", color: "bg-google-blue/10 ring-google-blue/30", text: "Mais orçamentos pelo WhatsApp." },
  { img: segBarbearia, title: "Barbearias", color: "bg-foreground/5 ring-foreground/20", text: "Agenda lotada e clientes fiéis." },
  { img: segLoja, title: "Lojas", color: "bg-google-yellow/15 ring-google-yellow/40", text: "Vitrine online e venda recorrente." },
  { img: segPrestador, title: "Prestadores de Serviço", color: "bg-primary/10 ring-primary/30", text: "Aparecer perto de quem precisa agora." },
];

function Segments() {
  return (
    <section id="segmentos" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          center
          eyebrow="Quem atendemos"
          title={
            <>
              Negócios diferentes. <span className="doodle-underline">Objetivo igual.</span>
            </>
          }
          subtitle="Cada segmento tem seus próprios desafios. A estratégia muda, o cuidado não."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className={`paper-card overflow-hidden p-0 ring-1 ${seg.color}`}
            >
              <div className="aspect-[5/3] w-full overflow-hidden bg-card">
                <img src={seg.img} alt={seg.title} className="h-full w-full object-contain p-4" loading="lazy" />
              </div>
              <div className="border-t border-border p-5">
                <h3 className="text-lg font-semibold">{seg.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{seg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", img: doodleAnalyze, title: "Analisamos", text: "Olhamos o seu negócio com lupa — Google, site, WhatsApp, concorrência." },
  { n: "02", img: doodlePlan, title: "Planejamos", text: "Montamos um plano simples, claro e priorizado pelo que mais traz resultado." },
  { n: "03", img: doodleImplement, title: "Implementamos", text: "Colocamos tudo no ar com cuidado e padrão profissional." },
  { n: "04", img: doodleMonitor, title: "Acompanhamos", text: "Medimos, ajustamos e seguimos do seu lado a cada etapa." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-soft-blue/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          center
          eyebrow="Como funciona"
          title={<>Um processo <span className="font-hand text-google-blue text-5xl md:text-6xl">simples</span>, do começo ao resultado.</>}
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="paper-card relative p-6">
              <div className="absolute -top-4 left-6 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                Passo {s.n}
              </div>
              <div className="aspect-square w-full grid place-items-center bg-card rounded-xl overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-contain p-2" loading="lazy" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <svg
                  className="hidden lg:block absolute top-24 -right-5 h-6 w-10 text-google-blue/50"
                  viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M2 12 C 12 4, 28 20, 38 12" />
                  <path d="M32 7 L 38 12 L 32 17" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentials = [
  { icon: Gift, title: "Diagnóstico gratuito", text: "Sem custo, sem letras miúdas. Você sai com clareza do que precisa." },
  { icon: Clock, title: "Atendimento rápido", text: "Responder no tempo certo faz parte do nosso trabalho — e do seu resultado." },
  { icon: Target, title: "Estratégia personalizada", text: "Nada de pacote engessado. Cada empresa tem o seu plano." },
  { icon: Headphones, title: "Suporte direto", text: "Você fala com quem executa, não com um robô de tickets." },
  { icon: Trophy, title: "Foco em resultados", text: "Mais contatos, mais oportunidades, mais clientes — esse é o jogo." },
  { icon: ShieldCheck, title: "Pagamento após aprovação", text: "Você só segue em frente quando estiver confortável com o que viu." },
];

function Differentials() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Diferenciais"
            title={
              <>
                Por que escolher a <span className="font-hand text-google-blue text-5xl md:text-6xl">LocalWay</span>.
              </>
            }
          />
          <div className="relative mt-8 max-w-sm">
            <img src={doodleMegaphone} alt="Divulgação que gera resultado" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {differentials.map((d) => (
            <div key={d.title} className="paper-card p-6">
              <d.icon className="h-7 w-7 text-google-blue" strokeWidth={1.6} />
              <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-y border-border bg-paper py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
        <div className="paper-card p-4 md:p-6 order-2 lg:order-1">
          <img src={aboutImg} alt="Equipe LocalWay" className="w-full h-auto" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle
            eyebrow="Sobre nós"
            title={<>Somos a <span className="font-hand text-google-blue text-5xl md:text-6xl">LocalWay</span>.</>}
          />
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>Somos especialistas em presença digital para negócios locais.</p>
            <p>Nossa missão é ajudar empresas a serem <span className="text-foreground font-medium">encontradas, lembradas e escolhidas</span>.</p>
            <p>Transformamos visibilidade em oportunidades reais de crescimento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  const cities = ["Fortaleza", "Caucaia", "Maracanaú", "Eusébio", "Aquiraz"];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Área de atendimento"
            title={<>Atendemos <span className="doodle-underline">Fortaleza</span> e Região Metropolitana.</>}
            subtitle="Presença próxima, atendimento direto, conhecimento da realidade local."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {cities.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <MapPin className="h-3.5 w-3.5 text-google-red" /> {c}
              </span>
            ))}
          </div>
        </div>
        <div className="paper-card p-4 md:p-6">
          <img src={mapImg} alt="Mapa de atendimento" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Team() {
  const people = [
    { img: fernandaImg, name: "Fernanda", role: "Estratégia & Atendimento", url: WHATSAPP_URL },
    { img: ricardoImg, name: "Ricardo", role: "Implementação & Tecnologia", url: WHATSAPP_URL },
  ];
  return (
    <section id="equipe" className="border-y border-border bg-soft-blue/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle center eyebrow="Nossa equipe" title="Fale com nossa equipe." subtitle="Sem intermediários, sem espera. Você fala com quem realmente vai cuidar do seu projeto." />
        <div className="mt-12 mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {people.map((p) => (
            <div key={p.name} className="paper-card flex flex-col items-center p-8 text-center">
              <div className="relative">
                <span className="absolute -inset-2 rounded-full bg-google-yellow/30 blur-md" />
                <img src={p.img} alt={p.name} className="relative h-32 w-32 rounded-full object-cover ring-4 ring-card" loading="lazy" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.role}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-white transition hover:opacity-95"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { img: doodleGoogle, title: "Ser encontrado", text: "Aparecer no Google e no Maps quando alguém procurar o que você faz." },
    { img: doodleReviews, title: "Ser confiável", text: "Avaliações, fotos e informações que transmitem credibilidade." },
    { img: doodleWhats, title: "Ser respondido", text: "WhatsApp configurado para transformar mensagens em clientes." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          center
          eyebrow="Os 3 pilares"
          title={<>Presença digital é mais simples do que <span className="font-hand text-google-blue text-5xl md:text-6xl">parece</span>.</>}
          subtitle="Tudo o que fazemos gira em torno de três objetivos simples e mensuráveis."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <div className="grid aspect-square w-full max-w-[320px] place-items-center rounded-3xl bg-soft-blue/40 p-4">
                <img src={it.img} alt={it.title} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-google-blue/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-google-yellow/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Não espere mais para <span className="font-hand text-google-blue text-5xl md:text-7xl">crescer</span>.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Descubra oportunidades que sua empresa pode estar perdendo neste momento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(DIAGNOSTIC_MSG)}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-google-blue px-6 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Receber diagnóstico gratuito <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
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
  );
}

function Footer() {
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
            <li><Link to="/google-meu-negocio" className="hover:text-foreground">Google Meu Negócio</Link></li>
            <li><Link to="/criacao-de-sites" className="hover:text-foreground">Criação de Sites</Link></li>
            <li><Link to="/loja-virtual" className="hover:text-foreground">Loja Virtual / E-commerce</Link></li>
            <li><Link to="/trafego-pago" className="hover:text-foreground">Tráfego Pago</Link></li>
            <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
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

function FloatingWhatsApp() {
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

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Comparator />
        <Pillars />
        <Services />
        <Ecosystem />
        <Segments />
        <HowItWorks />
        <Differentials />
        <About />
        <ServiceArea />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
