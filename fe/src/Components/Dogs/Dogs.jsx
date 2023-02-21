import React from 'react'
import "./Dogs.css"
import DogsCart from './DogsCart'

function Dogs({allDogs}) {
  return (
    <>
       <section className='dogs-container'>
         {allDogs.map((dog) => {
            return (
              <div  key = {dog.id} className='dogs-container'>
                 <DogsCart
                   Id = {dog.id}
                   Name = {dog.name}
                   Breed = {dog.breed}
                   Description = {dog.description}
                   Price = {dog.price}
                   imageUrl = {dog.imageUrl}
                 />
              </div>
            )
         })}
       </section>
    </>
  )
}

export default Dogs