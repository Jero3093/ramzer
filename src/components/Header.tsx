import { TbArrowsRandom } from "react-icons/tb";

function Header() {
  return (
    <header className="flex flex-row items-center gap-4 md:gap-10">
      <TbArrowsRandom className="w-14 h-14" />
      <h1 className="text-4xl font-semibold">Random Motion</h1>
    </header>
  );
}

export default Header;
