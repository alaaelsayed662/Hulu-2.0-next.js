import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  HomeIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between h-auto mt-5 mb-4">
      <div className="flex flex-grow justify-center max-w-2xl flex-wrap sm:justify-start">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightBulbIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <div className="mt-2 mr-3 cursor-pointer">
        <Link href="/">
          <Image src="/hulu-logo-white.png" width={75} height={25} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
