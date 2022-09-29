import React from 'react'

const CardPokemon = ({user}) => {
  return (
    <article className='cardpokemon_data'>
            <img className='imgPokemon' src={user?.sprites.other.home.front_default } alt="pokemon" />  
            <h2>Name: {user?.name}</h2>
            <ul>
                <h3>type: </h3>
                {
                    user?.types.map(type => (
                      <li key={type.type.name}> {type.type.name} </li>  
                    ))
                }
            </ul>
            <h3>Movements: </h3>
            <ul>
                {
                    user?.moves.map( e => (
                        <li key={e.move.name}> {e.move.name} </li>
                    ) )
                }
            </ul>
    </article>
  )
}

export default CardPokemon