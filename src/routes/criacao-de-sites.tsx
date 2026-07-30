import { createFileRoute } from "@tanstack/react-router";
import { Globe, Smartphone, Gauge, Search, MessageCircle, Palette } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/doodle-reviews.png";

export const Route = createFileRoute("/criacao-de-sites")({
  head: () => ({
    meta: [
      { title: "Criação de Sites Profissionais em Fortaleza | LocalWay" },
      {
        name: "description",
        content:
          "Criamos sites rápidos, claros e otimizados para SEO que transformam visitantes em contatos no WhatsApp. Ideal para negócios locais.",
      },
      { property: "og:title", content: "Criação de Sites Profissionais | LocalWay" },
      {
        property: "og:description",
        content: "Site profissional, responsivo e feito para converter visitas em clientes reais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      serviceKey="sites"
      eyebrow="Criação de Sites"
      headline={
        <>
          Um site que explica<br />
          o seu trabalho e{" "}
          <span className="font-hand text-google-yellow text-5xl md:text-6xl lg:text-7xl">convence</span>.
        </>
      }
      intro="Criamos sites simples de entender, rápidos de carregar e feitos para gerar contato. Nada de páginas confusas: cada seção existe para responder uma dúvida do seu cliente."
      heroBullets={["Layout aprovado antes de pagar", "Pronto em poucos dias"]}
      heroImg={heroImg}
      benefits={[
        { icon: Globe, title: "Presença própria", text: "Um endereço que é seu, sem depender só das redes sociais." },
        { icon: Smartphone, title: "Perfeito no celular", text: "A maioria dos seus clientes acessa pelo telefone. O site nasce assim." },
        { icon: Gauge, title: "Carregamento rápido", text: "Site leve: menos espera, menos desistência." },
        { icon: Search, title: "Pronto para o Google", text: "Estrutura de SEO, títulos e descrições configurados." },
        { icon: MessageCircle, title: "Botão de WhatsApp", text: "O caminho mais curto entre a visita e a conversa." },
        { icon: Palette, title: "Cara de empresa séria", text: "Visual limpo, coerente com a sua identidade." },
      ]}
      problems={[
        "Só um perfil de rede social como vitrine",
        "Cliente sem saber preços, horários ou serviços",
        "Site antigo, lento ou quebrado no celular",
        "Nenhum caminho claro para o contato",
        "Aparência amadora afastando clientes",
      ]}
      results={[
        "Site profissional com domínio próprio",
        "Serviços e diferenciais bem explicados",
        "Rápido e impecável em qualquer tela",
        "Botões de contato em todas as seções",
        "Base pronta para crescer com SEO",
      ]}
      deliverables={[
        { title: "Layout exclusivo", text: "Desenhado para o seu negócio, não um modelo genérico." },
        { title: "Até 6 seções", text: "Início, serviços, sobre, provas, área de atendimento e contato." },
        { title: "SEO básico incluso", text: "Títulos, descrições, imagens otimizadas e sitemap." },
        { title: "Integrações", text: "WhatsApp, Google Maps, Instagram e formulário." },
        { title: "Domínio e hospedagem", text: "Cuidamos da parte técnica de ponta a ponta." },
        { title: "Ajustes pós-entrega", text: "Rodada de revisões incluída após a publicação." },
      ]}
      steps={[
        { title: "Entendemos", text: "Conversamos sobre seu negócio, público e objetivos." },
        { title: "Estruturamos", text: "Definimos textos e seções antes de desenhar." },
        { title: "Criamos", text: "Design e desenvolvimento com aprovação sua em cada etapa." },
        { title: "Publicamos", text: "Colocamos no ar, medimos e ajustamos o que for preciso." },
      ]}
      faq={[
        { q: "Quanto tempo leva?", a: "Um site institucional costuma ficar pronto entre 7 e 15 dias, dependendo do conteúdo." },
        { q: "Eu preciso escrever os textos?", a: "Não. Podemos escrever com base em uma conversa e você apenas aprova." },
        { q: "Consigo editar depois?", a: "Sim. Entregamos orientação de uso e também oferecemos manutenção." },
      ]}
      ctaText="Olá! Quero um orçamento para criação de site com a LocalWay."
    />
  );
}
