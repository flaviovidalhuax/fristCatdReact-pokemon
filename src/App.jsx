import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardPokemon from './components/CardPokemon'

function App() {

  
  const [user, setUser] = useState()
  const [testSearch, setTextSearch] = useState()

      useEffect(() => {
        let URL
            if(testSearch){
             URL = `https://pokeapi.co/api/v2/pokemon/${testSearch}`
            }else{ URL = 'https://pokeapi.co/api/v2/pokemon/ditto'}
        axios.get(URL)
          .then(res => setUser(res.data))
          .catch(err => console.log(err))

      }, [testSearch])
      console.log(user);

      const handleSubmit = e => {
        e.preventDefault()
        setTextSearch(e.target.search.value)
      }

  return (
    <div className="App">
        <form  className='form_buttom' onSubmit={handleSubmit}>
            <input id='search' type="text" />
            <button>Search</button>
        </form>
        <CardPokemon user={user} />
    </div>

  )
}

export default App

/*
imagen(sprite)✅
nombre✅
type
stats
listado de todos los movimientos del poquemon
🦊
*/