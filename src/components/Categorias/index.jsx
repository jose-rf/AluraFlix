import CardVideo from '../Card'
import styles from './Categorias.module.css'

function Categorias({ nome, cor }){
    return(
        <section className={styles.categorias}>
            <h3 style={{backgroundColor: cor }} >{nome}</h3>
            <CardVideo />
        </section>
    )
}

export default Categorias