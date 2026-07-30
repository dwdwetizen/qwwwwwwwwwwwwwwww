import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "./SiteChrome";
import { SERVICES, type ServiceKey } from "./servicesData";

export function OtherServices({
  current,
  accentText = "text-google-blue",
  variant = "middle",
}: {
  current: ServiceKey;
  accentText?: string;
  variant?: "middle" | "end";
}) {
  const others = SERVICES.filter((s) => s.key !== current);
  return (
    <section
      className={
        variant === "middle"
          ? "border-y border-border bg-soft-blue/40 py-20"
          : "border-t border-border bg-paper py-20"
      }
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          center
          accentText={accentText}
          eyebrow="Ecossistema LocalWay"
          title={
            <>
              Conheça outros serviços da{" "}
              <span className="font-hand text-google-blue text-5xl md:text-6xl">LocalWay</span>.
            </>
          }
          subtitle="Cada serviço funciona sozinho — e funciona ainda melhor junto com os outros."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.key}
              to={s.to}
              className={`paper-card group flex flex-col overflow-hidden p-0 ring-1 transition hover:-translate-y-0.5 hover:shadow-lg ${s.ring} ${s.bgSoft}`}
            >
              <div className="aspect-[5/3] w-full overflow-hidden bg-card">
                <img src={s.img} alt={s.title} className="h-full w-full object-contain p-4" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col border-t border-border p-5">
                <div className={`grid h-10 w-10 place-items-center rounded-xl text-white ${s.bg}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${s.text}`}>
                  Ver serviço <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
