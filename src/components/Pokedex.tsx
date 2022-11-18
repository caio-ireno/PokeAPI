import '..';
import { useState, useEffect } from 'react';
import { ListPokemon } from './services/ListPokemon';
import { PokemonDetail } from './PokemonDetails';
import CardPokemon from './CardPokemon';

function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    ListPokemon().then((r) => setPokemons(r.results));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6 max-w-6xl m-auto">
        {pokemons.map((pokemon) => (
          <CardPokemon
            name={pokemon.name}
            url={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
