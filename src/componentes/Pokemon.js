import { useState, useEffect } from "react";

export default function Pokemon() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  //useEffect y los hooks siempre antes de los returns

  useEffect(() => {
    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const random = getRandomInt(1,1000);

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`).then((res) => {
      console.log(res);

      if (res.ok === true) {
        res.json().then((data) => {
          console.log(data);
          setPokemon(data);
          setLoading(false);
        });
      } else {
        console.error("Oops,", res.statusText);
      }
    });
  }, []);

  if (loading === true) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2>
        El peso de {pokemon.name} es {pokemon.weight}kg
      </h2>

      {
      pokemon.sprites && 
      <img src={pokemon.sprites.front_default} alt='pokemon ditto' />
      }
    </div>
  );
}
