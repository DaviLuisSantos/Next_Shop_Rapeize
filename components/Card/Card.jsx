import Link from 'next/link'
import styles from '../../styles/Card.module.css'
import Image from 'next/image'
import ImgDav from '../../images/Daviza.png'
import ImgGB from '../../images/GB.jpg'
import ImgPTK from '../../images/PTK.jpg'
import ImgPepe from '../../images/pepe.png'

import Org from './Org'


export default function Card() {
  return (
    /*<section className="orga">
      <Org className={styles.Davi} Img={ImgDav} Nome="Davizaun" Idade="19 Anos" Cor="Preto"></Org>
      <Org Img={ImgGB} Nome="Gabriell" Idade="19 Anos" Cor="Vermelho"></Org>
      <Org Img={ImgPTK} Nome="Patrick" Idade="20 Anos" Cor="Roxo"></Org>
    </section>
    */
    <section className="orga">
      <Org className={styles.Davi} Img={ImgPepe} Nome="Davizaun" Idade="19 Anos" Cor="Preto"></Org>
      <Org Img={ImgPepe} Nome="Gabriell" Idade="19 Anos" Cor="Vermelho"></Org>
      <Org Img={ImgPepe} Nome="Patrick" Idade="20 Anos" Cor="Roxo"></Org>
    </section>
  )
}