import '../main'

interface CardPokemonProps{
  name: string;
  type: string;
  url: string;
}


function CardPokemon(props: CardPokemonProps) {

    return (
    <div className='bg-neutral-100 w-40 h-48 grid justify-center mb-4'>
     <img src={props.url} alt="" />
     <h1 className='flex items-center justify-center rounded-xl mb-4'>{props.name}</h1>
     <span className='flex items-center justify-center rounded-xl mb-4'>{props.type}</span>
    </div>
  )
}

export default CardPokemon