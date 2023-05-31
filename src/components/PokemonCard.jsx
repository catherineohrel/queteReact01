function PokemonCard() {
    const pokemon = pokemonList[0]; 
    // return {"imgSrc" in pokemonList ? imgSrc : "???"}
    return (
        <figure>
            {"imgSrc" in pokemon === true ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}
    // or use pokemon.imgSrc != null

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;