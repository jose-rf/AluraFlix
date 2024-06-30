import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import CriarVideo from '../../components/CriarVideo';
import { saveVideo } from '../../components/Metodo POST'; 

function NovoVideo() {
  const handleSaveVideo = async (novoVideo) => {
    const sucesso = await saveVideo(novoVideo);

    if (sucesso) {
      console.log('Vídeo adicionado com sucesso!');
    } else {
      console.error('Falha ao adicionar o vídeo.');
    }
  };

  return (
    <>
      <Cabecalho />
      <CriarVideo onSaveVideo={handleSaveVideo} />
    </>
  );
}

export default NovoVideo;
