// Categorias.js
import React, { useState, useEffect } from 'react';
import CardVideo from '../Card'; 
import styles from './Categorias.module.css';

function Categorias({ nome, cor }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/videos');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();

        // Filtrar vídeos pela categoria passada como prop
        const filteredVideos = data.filter(video => video.categoria === nome);
        setVideos(filteredVideos);

      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData(); 

  }, [nome]);

  return (
    <section className={styles.categorias}>
      <h3 style={{ backgroundColor: cor }}>{nome}</h3>
      <div className={styles.cardContainer}>
        {videos.map((video) => (
          <CardVideo
            key={video.id}
            imagem={video.imagem} 
            titulo={video.titulo}
            link={video.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Categorias;
