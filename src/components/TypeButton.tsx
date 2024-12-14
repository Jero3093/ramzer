import { TypeButtonInt } from "@/utils/Interfaces";
import Link from "next/link";

function TypeButton({ href, title, color }: TypeButtonInt) {
  return (
    <Link
      href={href}
      className="w-52 h-52 rounded-full border-4 border-red-500 grid place-items-center hover:scale-110 transition-all"
      style={{ borderColor: color }}
    >
      <div
        className="w-48 h-48 bg-red-500 rounded-full grid place-items-center"
        style={{ background: color }}
      >
        <h3 className="font-semibold text-3xl">{title}</h3>
      </div>
    </Link>
  );
}

export default TypeButton;
