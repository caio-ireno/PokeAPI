import '../main'

function Menu() {
    return (
    <div className='flex flex-col items-center max-w-6xl m-auto'>
     <h1 className='text-transparent bg-clip-text bg-gradient-poke text-7xl '>
      <a href="Home">PokéDex</a>
     </h1>
     <div className='flex flex-row flex-wrap gap-4 my-5 h-20 w-full bg-blue-100 items-center justify-center rounded-xl '>
      <a href="/regiao" className='w-[160px] h-[60px] bg-amber-200 rounded-3xl'>Região</a>
      <a href="/tipo" className='w-[160px] h-[60px] bg-red-200 rounded-3xl'>Tipo</a>
      <a href="/pokedex" className='w-[160px] h-[60px] bg-green-200 rounded-3xl'>PokéDex</a>
      <button className='w-[480px] h-[60px] bg-sky-200 rounded-3xl'>Pesquisar</button>
     </div>
     
    </div>
  )
}

export default Menu
