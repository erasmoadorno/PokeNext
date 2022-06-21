import Charizard from "../../public/images/charizard.png"
import Image from "next/image"
import Styles from "../../styles/About.module.css"
import Link from "next/link"

export default function About() {
    return (
        <main className={Styles.about}>
            <Image src={Charizard} alt="Charizard"></Image>
            <div className={Styles.text}>

            <p>This website was made by me during at my studies about a framework called <Link href='https://nextjs.org'><a target='_blank'>NextJS</a></Link>. Which is good, because it has introduced me to API experience.</p><p> "So you made a pokemon website, an is that means you like this anime" - No, i don't and i have no knowledge of these cute creatures from this cartoon. But it showed how i had maded this website only using this API, the <Link href='https://pokeapi.co'><a target='_blank'>Pokeapi</a></Link>. And how i transformed that API information into this project with legible data and artwork.</p><p> If you like the project, you can see more at my <Link href='https://github.com/erasmoadorno'><a>github</a></Link>. If you want to use my skills to make any website or webpage, you can contact me at my <Link href='https://www.freelancer.com/u/ErasmoAdorno'><a target='_blank'>freelancer</a></Link> page. You also can access my <Link href='https://www.linkedin.com/in/erasmo-bertuci-adorno-b4280a124/'><a target='_blank'>linkeedin</a></Link> page.</p><p> Peace on Earth, and do make animal fighting only in art. 
  </p>
            </div>
        </main>
    )
}