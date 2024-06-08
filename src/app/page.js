import Section2 from "@/components/Section/Section2";
import Section1 from "@/components/Section/Section1";
import Image from "next/image";
import Section3 from "@/components/Section/Section3";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="min-h-screen"></div>
    </main>
  );
}
