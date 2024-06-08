import Section2 from "@/components/Section/Section-2";
import Section1 from "@/components/Section/Section1";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <div className="min-h-screen"></div>
    </main>
  );
}
