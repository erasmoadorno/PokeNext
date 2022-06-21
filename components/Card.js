import Image from "next/image"
import styles from '../styles/Card.module.css'
import Link from "next/dist/client/link"

export default function Card({pokemon}){
    return (
        <Link href={`/pokemon/${pokemon.id}/`}>
        <div className={styles.card}>
           <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={pokemon.name} width='120' height='120' className={styles.images} />
           <h4>#{pokemon.id}</h4>
           <h3>{pokemon.name}</h3>
        </div>
        </Link>
    )
}