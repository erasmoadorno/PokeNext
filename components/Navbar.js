import Link from "next/link";
import Image from "next/image";
import Pokeball from "../public/images/pokeball.png";
import style from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.logo}>
        <Image src={Pokeball} alt="Pokébola" width="32" height="32"></Image>
        <h1 className={style.title}>PokéNext</h1>
      </div>
      <aside>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </aside>
    </header>
  );
}
