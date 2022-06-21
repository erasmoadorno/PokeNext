// /?limit=
// .results.forEach((item,index)=>{item.id = index + 1})
// https://pokeapi.co/api/v2/pokemon/
// quando a imagem é de um api exterior adicionar no next.config.js → images: {domains: ['link.do.api']}
// Link do api de imagens do pokemon https://cdn.traction.one/pokedex/pokemon/ ← esse site tem 890 imagens que aparentemente condizem com pokeapi

import style from "../styles/Home.module.css";
import Image from "next/image";
import Pokebola from "../public/images/pokeball.png";
import Card from "../components/Card";
import Link from "next/link";

export async function getStaticProps() {
  const maxPok = 400
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(`${api}?limit=${maxPok}`)
  const data = await response.json()
  
  data.results.forEach((items, index)=>{
    items.id = index + 1
  })

  return{
    props:{pokemons: data.results}
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={style.home}>
        <h1 className={style.title}>
          Poké<span>Next</span>
        </h1>
        <Image src={Pokebola} alt="Pokebola" width="48" height="48"></Image>
      </div>
      {pokemons.map((pokemon)=>(
        <Card key={pokemon.id} pokemon = {pokemon} />
      ))}

     
    </>
  );
}

//
