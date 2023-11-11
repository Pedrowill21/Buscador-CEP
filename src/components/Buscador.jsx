import React, { useCallback, useEffect, useState } from 'react'
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const Buscador = () => {
  const [inputSearch,setInputSearch] = useState("")
  const [address,setAddress] = useState()
  const [error,setError] = useState()

  const SearchCep = async (cep)=>{
    setError('')
    setAddress()
    if(/[a-zA-Z]/.test(cep)){
        return setError("CEP inválido")
    }
    
    if(cep.length < 8){
      return setError("Não contém o número mínimo de caracteres ")
    }

   

    try{
      
      const url = `https://viacep.com.br/ws/${cep}/json/`
      const request = await fetch(url).then((res)=>res.json())
      setAddress(request)

    } catch(error){
      setError("CEP inexistente")
    }



  }




  return (
    <div className=' w-[310px] md:w-[600px] bg-slate-900 min-h-[300px] mt-5 rounded-2xl p-2'>
      <TextField.Root>
        <TextField.Slot onClick={()=>SearchCep(inputSearch)} className=' cursor-pointer'>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Procurar Cep" value={inputSearch} onChange={(event)=>setInputSearch(event.target.value)} />
      </TextField.Root>

      {
        error && (
            <div className=' text-center text-red-600 bg-white mt-2'>
              {error}
            </div>
        )
      }

      {
        address && (
            <div className=' w-full mt-5 font-bold bg-slate-800 text-slate-100 p-2'>
                <h2>Estado: {address.uf}</h2>
                <h2>Cidade: {address.localidade}</h2>
                <h3>Bairro: {address.bairro}</h3>
                <h3>DDD: {address.ddd}</h3>
                <h3>IBGE: {address.ibge}</h3>
                <h3>Logradouro: {address.logradouro}</h3>
          
            </div>
        )
      }


      
    </div>
  )
}

export default Buscador