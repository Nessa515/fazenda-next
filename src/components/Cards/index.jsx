import styles from './styles.module.css';

const Cards = ({producao, imagem, description}) => {
    return(
        <div className={styles.card}>

            <div className={styles.container}>
                <img src={imagem} alt="Plano de fundo" />
                <p className={styles.titulo}>{producao}</p>
            </div>
            
            <p>{description}</p>
            <img className={styles.legenda} src="Group 1.png" alt="" />
        </div>
    )
}

export default Cards;