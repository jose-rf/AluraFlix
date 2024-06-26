import React, { useState } from 'react';
import styles from './Card.module.css';
import Modal from '../Modal';

function CardVideo({ imagem, titulo, link }) {
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
                <a href={link}><img src={imagem} alt={titulo} /></a>
                
                <figcaption className={styles.caption}>
                    <div className={styles.titulo}>{titulo}</div>
                    <div className={styles.icons}>
                        <div className={styles.delete}>
                            <img src="/imagens/Vector.png" alt="Deletar" />
                            <p>Deletar</p>
                        </div>
                        <div className={styles.edit}>
                            <img src="/imagens/editar.png" alt="Editar" onClick={openModal} />
                            <p>Editar</p>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default CardVideo;
