import Link from "next/link";

export const DesktopMenu = () => {
  return (
    <nav className="w-full h-[60px] text-white flex justify-center items-center uppercase text-[13px] font-bold leading-6 tracking-[2px] gap-9 mobile:hidden tablet:hidden">
      <div>
        <Link className="hover:text-dark-orange" href="/">
          home
        </Link>
      </div>
      <div>
        <Link className="hover:text-dark-orange" href="/">
          headphones
        </Link>
      </div>
      <div>
        <Link className="hover:text-dark-orange" href="/">
          speakers
        </Link>
      </div>
      <div>
        <Link className="hover:text-dark-orange" href="/">
          earphones
        </Link>
      </div>
    </nav>
  );
};
