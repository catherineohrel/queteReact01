import PropTypes from "prop-types";


function NavBar({pokemonKey, pokemonList, }) {
    const [pokemonIndex, setPokemonIndex] = pokemonKey;
return(
<>
{pokemonList.map((pokemon, index) => (
<button key={index} onClick={()=>setPokemonIndex(index)}>{pokemon.name} </button>
))}
</>
)}

export default NavBar;