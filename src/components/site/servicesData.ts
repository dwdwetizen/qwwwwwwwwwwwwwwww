import { MapPin, Globe, ShoppingBag, Megaphone } from "lucide-react";
import doodleGoogle from "@/assets/doodle-google-business.png";
import doodleReviews from "@/assets/doodle-reviews.png";
import segLoja from "@/assets/seg-loja.png";
import doodleMegaphone from "@/assets/doodle-megaphone.png";

export type ServiceKey = "gmn" | "sites" | "ecommerce" | "trafego";

export type ServiceMeta = {
  key: ServiceKey;
  to: string;
  title: string;
  short: string;
  icon: typeof MapPin;
  img: string;
  /** literal tailwind classes (no dynamic strings) */
  text: string;
  bg: string;
  bgSoft: string;
  ring: string;
  shadow: string;
};

export const SERVICES: ServiceMeta[] = [
  {
    key: "gmn",
    to: "/google-meu-negocio",
    title: "Google Meu Negócio",
    short: "Apareça no Google e no Maps quando alguém procurar o que você faz.",
    icon: MapPin,
    img: doodleGoogle,
    text: "text-google-blue",
    bg: "bg-google-blue",
    bgSoft: "bg-google-blue/10",
    ring: "ring-google-blue/30",
    shadow: "shadow-google-blue/50",
  },
  {
    key: "sites",
    to: "/criacao-de-sites",
    title: "Criação de Sites",
    short: "Um site claro, rápido e profissional que transforma visitas em contatos.",
    icon: Globe,
    img: doodleReviews,
    text: "text-google-yellow",
    bg: "bg-google-yellow",
    bgSoft: "bg-google-yellow/15",
    ring: "ring-google-yellow/40",
    shadow: "shadow-google-yellow/50",
  },
  {
    key: "ecommerce",
    to: "/loja-virtual",
    title: "Loja Virtual / E-commerce",
    short: "Venda no seu próprio canal, com pagamento, entrega e controle no lugar.",
    icon: ShoppingBag,
    img: segLoja,
    text: "text-google-green",
    bg: "bg-google-green",
    bgSoft: "bg-google-green/10",
    ring: "ring-google-green/30",
    shadow: "shadow-google-green/50",
  },
  {
    key: "trafego",
    to: "/trafego-pago",
    title: "Tráfego Pago",
    short: "Anúncios no Google e nas redes para atrair quem já está procurando você.",
    icon: Megaphone,
    img: doodleMegaphone,
    text: "text-google-purple",
    bg: "bg-google-purple",
    bgSoft: "bg-google-purple/10",
    ring: "ring-google-purple/30",
    shadow: "shadow-google-purple/50",
  },
];

export const getService = (key: ServiceKey) =>
  SERVICES.find((s) => s.key === key)!;

export const WHATSAPP_URL = "https://wa.me/5585994307699";
export const DIAGNOSTIC_MSG = "Olá! Quero receber o diagnóstico gratuito da LocalWay.";
