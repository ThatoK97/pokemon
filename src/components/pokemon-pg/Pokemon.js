import { useEffect, useMemo, useState } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
 } from "react-router-dom";
import ShowPokemon from "./ShowPokemon";
import AboutPoki from "./AboutPoki";

export default function Pokemon() {
const [pokemon, setPokemon] = useState([]);
const [text, setText] = useState("");
//filter search based on input text
const [filteredSearch, setSearch] = useState([]);

const handleInput = $event => setText($event.target.value);

useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0`)
    .then(res => res.json())
    .then(data => {
      //give each pokemon object an id
        const results = data.results.map((pokemon, idx) => {
            return { ...pokemon, idx: idx + 1 }
        });
        setPokemon({ ...data, results })
    })
}, []);

useMemo(() => {
  if(!text) {
    setSearch([]);
    return;
  }

setSearch(() => {
  pokemon.results?.filter(item =>
    item.name.includes(text));
});

}, [text, pokemon.results]);

return (
    <Router>
    <div className="p-14">
      <div className="flex flex-col items-center">
        <Link to="/pokemon">
          <header className="text-4xl text-yellow-700">Pokemon Picker</header>
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <input
          value={text}
          onChange={handleInput}
          placeholder="Enter Pokemon here"
          type="text"
          className="mt-10 p-2 border-blue-500 border-2"
        />
      </div>
      <Switch>
        <Route path="/showpokemon/:slug">
          <ShowPokemon />
        </Route>
        <Route path="/aboutpoki">
          <AboutPoki pokemon={filteredSearch}/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}
