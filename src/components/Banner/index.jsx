import styles from './styles.module.css';

const Banner = () => {
    return(
        <div className={styles.banner}>
            <img src="image 9.png" alt="Plantação" />

            <img className={styles.logo} src="logo.png" alt="Logo" />

            <div className={styles.titulo}>
                <h1>Fazenda Orgânica</h1>
            </div>

        </div>
    )
}

export default Banner;