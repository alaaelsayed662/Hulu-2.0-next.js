import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";
function Results({ results }) {
  return (
    <FlipMove className="my-10 sm:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 3xl:flex justify-center flex-wrap">
      {results?.map((result) => {
        return <Thumbnail key={result?.id} result={result} />;
      })}
    </FlipMove>
  );
}

export default Results;
