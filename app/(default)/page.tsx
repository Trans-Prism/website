export const metadata = {
  title: "Trans Prism — 跨性别工具箱 · 安全 · 离线 · 开源",
  description: "专为跨性别群体打造的极简、安全、双擎驱动的实用工具箱",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
