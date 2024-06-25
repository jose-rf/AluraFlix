import React, { useState, useEffect } from 'react';
import CardVideo from '../Card'; 
import styles from './Categorias.module.css';

function Categorias({ nome, cor }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();

        setVideos(data.videos); // Define todos os vídeos da API

      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData(); 

  }, []);

  return (
    <section className={styles.categorias}>
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className={styles.cardContainer}>
        {videos.map((video) => (
          <CardVideo
            key={video.id}
            imagem={video.imagem} 
            titulo={video.titulo}
            categoria={video.categoria}
            link={video.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Categorias;
