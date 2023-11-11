import Buscador from "./components/Buscador";

function App() {
 
  return (
    <div className=" bg-slate-950 h-full min-h-screen flex flex-col items-center justify-center text-orange-500">
      <h1 className=' font-bold text-orange-500 text-4xl '>Buscador de CEP</h1>
      <Buscador/>

    </div>
  )
}

export default App
