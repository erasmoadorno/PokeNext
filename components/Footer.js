import style from "../styles/Footer.module.css"
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={style.footer}>
        <p>Page made by <Link href="https://github.com/erasmoadorno"><a target="_blank">Erasmo Adorno</a></Link> to Next JS 2022&copy; course.</p>
    </footer>
  );
}
