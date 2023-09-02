import "./css/card.css"

interface CardProp {
    title: string;
    conteudo: string;
    image: string;
}

export function Card({ title, conteudo, image } : CardProp) {
    return (
        <div className="card">
            <div className="imgCard">
                <img src={ image } alt="" className="imagem"/>
            </div>
            <div className="info">
                <h1>{ title }</h1>
                <p>{ conteudo }</p>
                <button>Ver Mais</button>
            </div>
        </div>
    )
}