import Link from "next/link";

export default function ShelterButton({ name, id }) {
  return (
    <Link href="/" className="bg-white  group cursor-default ">
      <div className="flex justify-center items-center h-full py-12 px-6  text-center border-4 border-black group-hover:translate-x-4 group-hover:-translate-y-4 transition duration-300">
        <p className="text-xl">{name}</p>
      </div>
    </Link>
  );
}
