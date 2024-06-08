import Link from "next/link";

export default function SosmedButton({ icon, link }) {
  return (
    <Link href={link}>
      <div className="w-14 group">
        <img
          src={icon}
          alt=""
          className="w-full group-hover:scale-75 transition duration-300"
        />
      </div>
    </Link>
  );
}
