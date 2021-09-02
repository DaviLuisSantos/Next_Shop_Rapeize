import Image from 'next/image'
import Link from 'next/link'

export default function Org(props) {
    return (
        <section className="card">
            <Link href='/shop'>
            <Image  className="Linkado" src={props.Img} width="250" height="250" />
            </Link>
            <div className="card_txt">
                <h2>{props.Nome}</h2>
                <p>{props.Idade}</p>
                <p>{props.Cor}</p>
            </div>
        </section>
    )
}