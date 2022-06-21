import Image from "next/dist/client/image";
import Styles from "../../styles/Pokemon.module.css";
import Head from "next/head";

export const getStaticPaths = async () => {
  const maxPokemons = 401;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const resp = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await resp.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { idpokemon: index.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  let id = ctx.params.idpokemon;
  if (id == 0) {
    id = 400;
  }

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await resp.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} -
          PokéNext
        </title>
      </Head>
      <main className={Styles.pokemon}>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width="316"
          height="316"
        />
        <h1 className={Styles.title}>{pokemon.name}</h1>

        <h3>Type:</h3>
        {pokemon.types.map((T_item, T_index) => (
          <span
            key={T_index}
            className={`${Styles.type} ${Styles["type_" + T_item.type.name]}`}
          >
            {" "}
            {T_item.type.name}{" "}
          </span>
        ))}
        <h3>Abilities:</h3>
        {pokemon.abilities.map((A_item, A_index) => (
          <span className={Styles.abilities} key={A_index}>
            {" "}
            {A_item.ability.name}{" "}
          </span>
        ))}
        <div className={Styles.info}>
          <span className={Styles.info_font}>Weight:</span>{" "}
          {pokemon.weight / 10} Kg
          <br />
          <span className={Styles.info_font}>Height:</span>{" "}
          {((pokemon.height * 10) / 100).toFixed(2)} Cm
        </div>
      </main>
    </>
  );
}
