import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Star, Camera, Search, MessageCircle, BarChart3 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/doodle-google-business.png";

export const Route = createFileRoute("/google-meu-negocio")({
  head: () => ({
    meta: [
      { title: "Google Meu Negócio em Fortaleza | LocalWay" },
      {
        name: "description",
        content:
          "Otimização completa do Google Meu Negócio: perfil, fotos, avaliações e posicionamento no Maps para sua empresa ser encontrada em Fortaleza.",
      },
      { property: "og:title", content: "Google Meu Negócio em Fortaleza | LocalWay" },
      {
        property: "og:description",
        content: "Perfil otimizado, mais avaliações e destaque no Google Maps para o seu negócio local.",
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
      serviceKey="gmn"
      eyebrow="Google Meu Negócio"
      headline={
        <>
          Seu negócio no{" "}
          <span className="doodle-underline">mapa</span>,<br />
          na hora em que alguém{" "}
          <span className="font-hand text-google-blue text-5xl md:text-6xl lg:text-7xl">procura</span>.
        </>
      }
      intro="Criamos e otimizamos o seu perfil no Google Meu Negócio para que sua empresa apareça na busca e no Google Maps — com informações corretas, fotos boas e avaliações que geram confiança."
      heroImg={heroImg}
      heroBullets={["Diagnóstico gratuito do perfil", "Sem mensalidade obrigatória"]}
      benefits={[
        { icon: MapPin, title: "Apareça no Maps", text: "Sua empresa localizada e visível para quem está perto agora." },
        { icon: Search, title: "Busca local", text: "Posicionamento nas pesquisas do tipo “perto de mim”." },
        { icon: Star, title: "Mais avaliações", text: "Estratégia simples para receber avaliações reais e constantes." },
        { icon: Camera, title: "Fotos que vendem", text: "Um perfil bonito passa credibilidade antes do primeiro contato." },
        { icon: MessageCircle, title: "Contato direto", text: "Botão de WhatsApp, telefone e rota configurados corretamente." },
        { icon: BarChart3, title: "Dados de verdade", text: "Acompanhamento de visualizações, cliques e chamadas." },
      ]}
      problems={[
        "Empresa não aparece no Google Maps",
        "Perfil incompleto ou com dados errados",
        "Poucas fotos e nenhuma avaliação recente",
        "Concorrente aparecendo na sua frente",
        "Clientes ligando para número desatualizado",
      ]}
      results={[
        "Perfil completo, verificado e otimizado",
        "Categorias e palavras-chave certas",
        "Fotos profissionais organizadas",
        "Fluxo de avaliações funcionando",
        "Mais chamadas, rotas e mensagens",
      ]}
      deliverables={[
        { title: "Criação ou reivindicação", text: "Cuidamos da verificação do perfil junto ao Google." },
        { title: "Otimização completa", text: "Categorias, serviços, horários, área de atuação e descrição." },
        { title: "Fotos e capa", text: "Seleção e publicação de imagens que representam seu negócio." },
        { title: "Avaliações", text: "Link direto, QR code e orientação para pedir avaliações." },
        { title: "Publicações", text: "Posts periódicos no perfil para manter atividade." },
        { title: "Relatório mensal", text: "O que aconteceu no seu perfil, em linguagem simples." },
      ]}
      steps={[
        { title: "Analisamos", text: "Auditamos seu perfil atual e o dos concorrentes na sua região." },
        { title: "Planejamos", text: "Definimos categorias, palavras-chave e prioridades." },
        { title: "Implementamos", text: "Publicamos tudo com padrão profissional e verificação." },
        { title: "Acompanhamos", text: "Medimos resultados e ajustamos mês a mês." },
      ]}
      faq={[
        { q: "Preciso já ter um perfil criado?", a: "Não. Se não existir, criamos do zero e cuidamos da verificação junto ao Google." },
        { q: "Em quanto tempo aparecem resultados?", a: "Normalmente as primeiras melhorias de visualizações aparecem entre 2 e 6 semanas." },
        { q: "Vocês respondem as avaliações?", a: "Podemos responder por você ou orientar sua equipe a fazer isso do jeito certo." },
      ]}
      ctaText="Olá! Quero o diagnóstico gratuito do meu Google Meu Negócio."
    />
  );
}
