import Link from "next/link";
import { TbArrowsRandom } from "react-icons/tb";

function Header() {
  return (
    <header className="flex">
      <Link
        href="/"
        className="flex flex-row items-center gap-4 md:gap-10"
        about="Random Motion"
        title="Home"
      >
        <TbArrowsRandom className="w-14 h-14" />
        <h1 className="text-4xl font-semibold">Ramzer</h1>
      </Link>
    </header>
  );
}

export default Header;
