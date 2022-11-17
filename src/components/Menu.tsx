import '../main'

function Menu() {
    return (
    <div className='flex flex-col items-center max-w-6xl m-auto'>
     <h1 className='text-transparent bg-clip-text bg-gradient-poke text-7xl '>
      <a href="Home">PokéDex</a>
     </h1>
     <div className='flex flex-row flex-wrap gap-4 my-5 h-20 w-full bg-blue-100 items-center justify-center rounded-xl '>
      <a className='w-[160px] h-[60px] bg-amber-200 rounded-3xl text-center flex items-center justify-center hover:bg-amber-100 hover:text-2xl' href="/regiao" >Região</a>
      <a href="/tipo" className='w-[160px] h-[60px] bg-red-200 rounded-3xl flex items-center justify-center hover:bg-red-100 hover:text-2xl'>Tipo</a>
      <a href="/pokedex" className='w-[160px] h-[60px] bg-green-200 rounded-3xl flex items-center justify-center hover:bg-green-100 hover:text-2xl'>PokéDex</a>
      <form>
        <label htmlFor="nome"></label>
        <input className='w-[480px] h-[60px] bg-sky-200 rounded-3xl pl-5 hover:bg-sky-100' type="text" id='pokemon' />
      </form>
     </div>
     
    </div>
  )
}

export default Menu
