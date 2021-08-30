import { forwardRef } from "react";
import Image from "next/image";
import {
  DotsCircleHorizontalIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  // console.log(result);
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition duration-200 transform sm:hover:scale-105 thumnail_wrapper"
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="py-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 truncate text-white text-xl transition-all duration-150 ease-in-out">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && (
            <>
              <span className="capitalize">{result.media_type + " . "}</span>
              <span> &nbsp;</span>
            </>
          )}
          {result.release_date && `${result.release_date} .`}{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
