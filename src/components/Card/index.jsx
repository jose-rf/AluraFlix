import styles from './Card.module.css'

function CardVideo() {
    return (
            <figure className={styles.card}>
                <img src="https://i.ytimg.com/vi/vAtCg_2TtsU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVOIK7HTtHmjagxzY_ZrbEIpkC2A" alt="" />
                <figcaption className={styles.caption}>
                    <div className={styles.delete}>
                         <img src="/imagens/Vector.png" alt="" />
                        <p>Deletar</p>
                    </div>
                    <div className={styles.edit}>
                        <img src="/imagens/editar.png" alt="" />
                        <p>Editar</p>
                    </div>
                       
                        

                </figcaption>
            </figure>
    )
}

export default CardVideo;