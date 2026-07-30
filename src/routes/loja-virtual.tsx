import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, CreditCard, Truck, PackageSearch, MessageCircle, BarChart3 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/seg-loja.png";

export const Route = createFileRoute("/loja-virtual")({
  head: () => ({
    meta: [
      { title: "Loja Virtual e E-commerce para Negócios Locais | LocalWay" },
      {
        name: "description",
        content:
          "Criamos sua loja virtual com pagamento online, frete, catálogo organizado e integração com WhatsApp. Venda no seu próprio canal.",
      },
      { property: "og:title", content: "Loja Virtual / E-commerce | LocalWay" },
      {
        property: "og:description",
        content: "Catálogo, pagamento, frete e WhatsApp integrados para você vender todos os dias.",
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
      serviceKey="ecommerce"
      eyebrow="Loja Virtual / E-commerce"
      headline={
        <>
          Sua loja aberta<br />
          <span className="doodle-underline">24 horas</span>, vendendo{" "}
          <span className="font-hand text-google-green text-5xl md:text-6xl lg:text-7xl">sozinha</span>.
        </>
      }
      intro="Montamos sua loja virtual completa: catálogo organizado, pagamento online, cálculo de frete e pedidos chegando direto no seu WhatsApp — sem depender de marketplace."
      heroImg={heroImg}
      heroBullets={["Loja pronta para vender", "Você no controle dos pedidos"]}
      benefits={[
        { icon: ShoppingBag, title: "Catálogo organizado", text: "Produtos com fotos, variações e descrições que vendem." },
        { icon: CreditCard, title: "Pagamento online", text: "Pix, cartão e boleto configurados com segurança." },
        { icon: Truck, title: "Frete e retirada", text: "Cálculo automático, entrega local e retirada na loja." },
        { icon: MessageCircle, title: "Pedido no WhatsApp", text: "Notificação do pedido direto onde você já atende." },
        { icon: PackageSearch, title: "Estoque sob controle", text: "Sem vender o que acabou nem esquecer o que sobrou." },
        { icon: BarChart3, title: "Relatórios claros", text: "O que vende mais, quando vende e para quem." },
      ]}
      problems={[
        "Vendas dependendo só do direct e do balcão",
        "Preços respondidos um a um, o dia inteiro",
        "Marketplace ficando com boa parte da margem",
        "Sem controle de estoque ou de pedidos",
        "Cliente desiste porque não consegue pagar online",
      ]}
      results={[
        "Loja própria funcionando dia e noite",
        "Catálogo com preços sempre atualizados",
        "Margem maior, sem comissão de terceiros",
        "Pedidos e estoque organizados",
        "Checkout simples, do carrinho ao Pix",
      ]}
      deliverables={[
        { title: "Loja completa", text: "Estrutura, layout e páginas de produto configuradas." },
        { title: "Cadastro inicial", text: "Subimos seus primeiros produtos com fotos e descrições." },
        { title: "Meios de pagamento", text: "Integração com gateway e configuração de Pix e cartão." },
        { title: "Frete e entrega", text: "Correios, transportadora, entrega local e retirada." },
        { title: "Integrações", text: "WhatsApp, Google Meu Negócio, Instagram Shopping." },
        { title: "Treinamento", text: "Ensinamos sua equipe a cadastrar produtos e gerir pedidos." },
      ]}
      steps={[
        { title: "Analisamos", text: "Entendemos seus produtos, margens e forma de entrega." },
        { title: "Planejamos", text: "Definimos categorias, fluxo de compra e pagamentos." },
        { title: "Implementamos", text: "Montamos a loja, testamos o checkout e publicamos." },
        { title: "Acompanhamos", text: "Ajustamos com base nas vendas reais dos primeiros meses." },
      ]}
      faq={[
        { q: "Tem mensalidade?", a: "Existe o custo da plataforma e das taxas de pagamento. Explicamos tudo antes, sem surpresas." },
        { q: "Quantos produtos posso cadastrar?", a: "Não há limite prático. Cadastramos os primeiros e você segue no mesmo padrão." },
        { q: "Serve para quem entrega só na cidade?", a: "Sim. Configuramos entrega local por bairro e retirada no balcão." },
      ]}
      ctaText="Olá! Quero criar minha loja virtual com a LocalWay."
    />
  );
}
