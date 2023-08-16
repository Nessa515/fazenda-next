import styles from './styles.module.css';
import Cards from '../Cards';
import { useState } from 'react';


const ListCards = () => {
    const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac egestas felis, et auctor neque. Vestibulum vel lorem velit. Sed ut fermentum odio. Sed ut fermentum odio."

    const [cards, setCards] = useState([
        {
            id: 0,
            producao: "Produção de uva",
            imagem: "uva.png",
            description: texto
        },
        {
            id: 1,
            producao: "Gado de corte",
            imagem: "gado.png",
            description: texto
        },
        {
            id: 3,
            producao: "Produção de laranja",
            imagem: "laranja.png",
            description: texto
        },
        {
            id: 4,
            producao: "Caprinos",
            imagem: "caprinos.png",
            description: texto
        },
        {
            id: 5,
            producao: "Produção de ovos",
            imagem: "ovos.png",
            description: texto
        },
        {
            id: 6,
            producao: "Produção de tomate",
            imagem: "tomate.png",
            description: texto
        },
        {
            id: 7,
            producao: "Hortifruti",
            imagem: "hortifruti.png",
            description: texto
        }
    ])

    return(
        <div className={styles.listaCards}>
            {cards.map((card) => (
                <Cards 
                    key={card.id}
                    producao={card.producao}
                    imagem={card.imagem}
                    description={card.description}
                />
            ))}
        </div>
    )
}

export default ListCards;