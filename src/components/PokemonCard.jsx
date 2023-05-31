function PokemonCard({image, name}) {
   
    console.log({image, name});
    
    return (
        <figure>
            {image != null ? (<img src={image} alt={name} />) : (<p>???</p>)}
            <figcaption>{name}</figcaption>
        </figure>
    );
}
 

export default PokemonCard;