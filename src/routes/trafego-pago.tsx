import { createFileRoute } from "@tanstack/react-router";
import { Target, Megaphone, MousePointerClick, Wallet, BarChart3, Users } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/doodle-megaphone.png";

export const Route = createFileRoute("/trafego-pago")({
  head: () => ({
    meta: [
      { title: "Tráfego Pago: Google Ads e Meta Ads em Fortaleza | LocalWay" },
      {
        name: "description",
        content:
          "Gestão de tráfego pago no Google Ads e Meta Ads para negócios locais: campanhas segmentadas, orçamento controlado e relatórios claros.",
      },
      { property: "og:title", content: "Tráfego Pago | LocalWay" },
      {
        property: "og:description",
        content: "Anúncios que colocam sua empresa na frente de quem já está procurando o que você faz.",
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
      serviceKey="trafego"
      eyebrow="Tráfego Pago"
      headline={
        <>
          Anúncios que falam<br />
          com quem já está{" "}
          <span className="font-hand text-google-purple text-5xl md:text-6xl lg:text-7xl">procurando</span>.
        </>
      }
      intro="Criamos e gerenciamos campanhas no Google Ads e nas redes sociais com foco na sua região. Orçamento controlado, público certo e relatórios que qualquer pessoa entende."
      heroImg={heroImg}
      heroBullets={["Você define o investimento", "Relatório mensal simples"]}
      benefits={[
        { icon: Target, title: "Público certo", text: "Segmentação por bairro, interesse e intenção de compra." },
        { icon: MousePointerClick, title: "Resultado rápido", text: "Enquanto o SEO amadurece, o anúncio já traz contato hoje." },
        { icon: Wallet, title: "Orçamento sob controle", text: "Você escolhe quanto investir e acompanha cada real." },
        { icon: Megaphone, title: "Criativos que param o dedo", text: "Textos e imagens feitos para o seu tipo de cliente." },
        { icon: Users, title: "Remarketing", text: "Voltamos a falar com quem já visitou e não fechou." },
        { icon: BarChart3, title: "Relatórios claros", text: "Quanto entrou, quanto custou e o que faremos a seguir." },
      ]}
      problems={[
        "Impulsionar post sem estratégia e sem retorno",
        "Anúncio aparecendo para gente de outra cidade",
        "Não saber quanto custa cada cliente",
        "Verba gasta rápido, sem contato gerado",
        "Nenhum acompanhamento depois do clique",
      ]}
      results={[
        "Campanhas estruturadas por objetivo",
        "Segmentação geográfica na sua região",
        "Custo por contato medido de verdade",
        "Otimização contínua do orçamento",
        "Contatos chegando no WhatsApp todo dia",
      ]}
      deliverables={[
        { title: "Configuração de contas", text: "Google Ads e Meta Ads criados e configurados corretamente." },
        { title: "Pesquisa de palavras-chave", text: "O que seu cliente digita quando precisa de você." },
        { title: "Criativos e textos", text: "Anúncios escritos e desenhados para o seu público." },
        { title: "Rastreamento", text: "Conversões de WhatsApp, ligação e formulário medidas." },
        { title: "Otimização mensal", text: "Ajustes de lances, públicos e criativos todo mês." },
        { title: "Relatório mensal", text: "Resultados sem jargão, com próximos passos definidos." },
      ]}
      steps={[
        { title: "Analisamos", text: "Estudamos seu mercado, região e concorrência." },
        { title: "Planejamos", text: "Definimos objetivo, verba, públicos e mensagens." },
        { title: "Implementamos", text: "Subimos campanhas e configuramos o rastreamento." },
        { title: "Acompanhamos", text: "Otimizamos semanalmente e reportamos todo mês." },
      ]}
      faq={[
        { q: "Qual o investimento mínimo?", a: "Trabalhamos com verbas a partir de valores acessíveis para negócios locais. Definimos juntos no diagnóstico." },
        { q: "A verba de anúncio é paga a vocês?", a: "Não. A verba vai direto para o Google ou Meta. Nossa parte é a gestão." },
        { q: "Funciona melhor com site ou com Google Meu Negócio?", a: "Funciona muito melhor com os dois. Por isso combinamos os serviços quando faz sentido." },
      ]}
      ctaText="Olá! Quero investir em tráfego pago com a LocalWay."
    />
  );
}
