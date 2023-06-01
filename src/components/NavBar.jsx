import PropTypes from "prop-types";


function NavBar({pokemonIndex, pokemonList, handleClickNext, handleClickPrevious}) {
return(
<>
{pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Precedant</button> : null}
{pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : null}
</>
)}

export default NavBar;