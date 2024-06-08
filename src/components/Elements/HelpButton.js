import Link from "next/link";

export default function HelpButton() {
  return (
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
  );
}
