import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import Categorias from '../../components/Categorias';
import ModalZoom from '../../components/Modal';

function Inicio() {
  const categorias = [
    {
      nome: 'Front End',
      cor: '#6BD1FF',
    },
    {
      nome: 'Back End',
      cor: '#00C86F',
    },
    {
      nome: 'Inovação',
      cor: '#FFBA05',
    },
    {
      nome: 'Gestão',
      cor: '#051EFF',
    },
  ];

  const [videoToEdit, setVideoToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (video) => {
    setVideoToEdit(video);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    
    setVideoToEdit(null);
    setIsModalOpen(false);
   
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoToEdit(null);
  };

  return (
    <>
      <Cabecalho />
      <Banner categorias={categorias} />
      {categorias.map((categoria) => (
        <Categorias
          key={categoria.nome}
          nome={categoria.nome}
          cor={categoria.cor}
          onEditClick={handleEditClick} 
        />
      ))}
      {isModalOpen && (
        <ModalZoom
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoToEdit={videoToEdit}
          onSave={handleSave}
        />
      )}
      <Rodape />
    </>
  );
}

export default Inicio;
