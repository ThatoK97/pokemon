import { Link } from "react-router-dom";

export default function AboutPoki({ pokemon: results }) {
    return (
      <div className="mt-10 p-4 flex flex-wrap">
      {results &&
      //map over each pokemon object and return item.name wrapped in a div
        results.map((inputVal) => (
          <div className="ml-4 text-2xl text-blue-400" key={inputVal.idx}>
            <Link to={`/showpokemon/${inputVal.idx}`}>{inputVal.name}</Link>
          </div>
        ))}
    </div>
    )
  }