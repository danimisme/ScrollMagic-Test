import { sheltersData } from "@/data/sheltersData";
import ShelterButton from "../Elements/ShelterButton";
import Link from "next/link";
export default function Section3() {
  return (
    <div className="bg-[#fcf944]">
      <div className="container max-w-7xl mx-auto px-10 py-32">
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-10">We Want to help</h1>
          <p className="text-4xl max-w-6xl leading-[150%]">
            homeless packs, volunteers, guardians, overstayers, shelters and
            other organisations
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-20">
          {sheltersData.map((shelter, index) => (
            <ShelterButton key={index} name={shelter.name} id={shelter.id} />
          ))}
        </div>
        <div className="flex">
          <Link href="/" className="bg-[#ff97d0] group ">
            <div className="flex gap-5 justify-center items-center h-full px-10 py-5 text-center border-4 border-black">
              <p className="text-2xl font-bold">apply for help</p>
              <img
                src="/logo/arrow.png"
                alt="arrow"
                className="h-8 rotate-180 group-hover:translate-x-4 transition duration-300"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
