import { useState } from 'react';
import styles from './Card.module.css';
import Modal from '../Modal';

function CardVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <figure className={styles.card}>
                <img src="https://i.ytimg.com/vi/vAtCg_2TtsU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVOIK7HTtHmjagxzY_ZrbEIpkC2A" alt="" />
                <figcaption className={styles.caption}>
                    <div className={styles.delete}>
                        <img src="/imagens/Vector.png" alt="" />
                        <p>Deletar</p>
                    </div>
                    <div className={styles.edit}>
                        <img src="/imagens/editar.png" alt="" onClick={openModal} />
                        <p>Editar</p>
                    </div>
                </figcaption>
            </figure>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default CardVideo;
