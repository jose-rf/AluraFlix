import React from 'react';
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
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
        }



        
    ]

    return (
        <>
            <Cabecalho />
            <Banner imagem="player" />
            {categorias.map(categorias => <Categorias nome={categorias.nome} cor={categorias.cor}/>)}
            <ModalZoom  />
            <Rodape />
        </>
    );
}

export default Inicio;
