import requests from "../utils/requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  let genre = router.query.genre;

  return (
    <nav>
      <div className="flex justify-start text-lg whitespace-nowrap space-x-10 sm:space-x-16 font-normal overflow-x-scroll scrollbar-hide md:whitespace-normal md:justify-center md:flex-wrap">
        {Object.entries(requests).map(([key, { title }]) => {
          return (
            <h2
              onClick={() => router.push(`?genre=${key}`)}
              key={key}
              className={`first:pl-0 last:pr-0 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-600 md:mb-2 ${
                key === genre
                  ? " text-red-800 active:text-red-800 transform scale-125 hover:text-red-800"
                  : ""
              }`}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <p
        className="sm:text-white md:text-red-600 
      lg:text-green-50 xl:text-green-50 
      2xl:text-yellow-50 "
      ></p>
    </nav>
  );
}

export default Nav;
