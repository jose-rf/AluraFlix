import React, { useState, useEffect } from 'react';
import CardVideo from '../Card';
import styles from './Categorias.module.css';

function Categorias({ nome, cor }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:3000/videos');
                if (!response.ok) {
                    throw new Error('Falha ao carregar os vídeos');
                }
                const data = await response.json();
                setVideos(data.videos);
            } catch (error) {
                console.error('Erro ao buscar os vídeos:', error);
            }
        };

        fetchVideos();
    }, []);

    const categorias = {
        'Front End': [],
        'Back End': [],
        'Inovação': [],
        'Gestão': []
    };

    videos.forEach(video => {
        if (categorias.hasOwnProperty(video.categoria)) {
            categorias[video.categoria].push(
                <CardVideo
                    key={video.id}
                    titulo={video.titulo}
                    imagem={video.imagem}
                    link={video.link}
                    descricao={video.descricao}
                />
            );
        }
    });

    return (
        <section className={styles.categorias}>
            <h3 style={{ backgroundColor: cor }}>{nome}</h3>
            <div>
                {Object.entries(categorias).map(([categoria, videos]) => (
                    <div key={categoria}>
                        <h4>{categoria}</h4>
                        {videos}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categorias;
