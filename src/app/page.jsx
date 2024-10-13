import { Header } from "@/components/Header";
import { MainHero } from "@/components/Home/MainHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <MainHero />
    </div>
  );
}
