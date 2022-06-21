import Image from "next/dist/client/image"
import Img from '../public/images/erro404.jpg'
import Styles from '../styles/Erro404.module.css'
import Head from "next/head"
export default function error404() {
    return(
        <>
        <Head><title>Error 404 - Page not found</title></Head>
        <main className={Styles.page}>
        <h1>Error 404</h1>
        <p>Page not found.</p>
        <Image src={Img} width='640' height='360'></Image>
        </main>
        </>
    )
}