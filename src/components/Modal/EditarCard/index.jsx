import React, { useState } from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Opcao = styled.option`
    color: black;
`

const CardTitle = styled.h1`
    color: #2271D1;
    font-weight: 700;
    font-size: 32px;
`;


const CardLabel = styled.label`
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;


const CardInput = styled.input`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px;
    width: 500px;
    color: white;
    font-size: 20px;
`;

const CardSelect = styled.select`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px;
    width: 531px;
    color: white;
    font-size: 20px;
`;

const CardTextarea = styled.textarea`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px;
    width: 500px;
    color: white;
    font-size: 20px;
`;


const CardButton = styled.button`
    border: 2px solid white;
    color: white;
    font-size: 18px;
    width: 180px;
    padding: 10px;
    background-color: transparent;
    border-radius: 10px;

    &:hover {
        border: 2px solid rgba(34, 113, 209, 1);
        color: rgba(34, 113, 209, 1);
        background-color: rgba(0, 0, 0, 0.9);
    }
`;


const CardButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Subtitulo = styled.p`
    color: white;
    font-size: 18px;
`;

const EditarCard = ({ titulo, subtitulo }) => {

    //let valor = ''

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    const [valorImg, setValorImg] = useState('')

    const aoDigitadoImg = (evento) => {
        setValorImg(evento.target.value)
        console.log(valorImg)
    }

    const [valorLink, setValorLink] = useState('')

    const aoDigitadoLink = (evento) => {
        setValorLink(evento.target.value)
        console.log(valorLink)
    }

    const [valorCampo, setValorCampo] = useState('')

    const aoDigitadoCampo = (evento) => {
        setValorCampo(evento.target.value)
        console.log(valorCampo)
    }

    const [valorOp, setValorOp] = useState('')

    const aoDigitadoOp = (evento) => {
        setValorOp(evento.target.value)
    }

     const aoSalvar = async (evento) => {
        evento.preventDefault()

        const novoVideo = {
            titulo:valor,
            categoria: valorOp,
            imagem: valorImg,
            video: valorLink,
            descricao: valorCampo,
        }

        try {
            const resposta = await fetch('http://localhost:3001/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoVideo),
            });
        
            if (resposta.ok) {
                console.log('Video salvo com sucesso');
                setValor('');
                setValorImg('');
                setValorLink('');
                setValorCampo('');
                setValorOp('');
            } else {
                console.error('Falha ao salvar o video');
            }
        } catch (erro) {
            console.error('Erro ao salvar o video:', erro);
        }
    }

    return (
        <CardContainer>
            <CardTitle>{titulo}</CardTitle>
            <Subtitulo>{subtitulo}</Subtitulo>
            <form action="/salvar-dados" method="post">
                <div>
                    <CardLabel htmlFor="titulo">Título</CardLabel>
                    <CardInput value={valor} onChange={aoDigitado}  type="text" id="titulo" name="titulo" required />
                </div>
                <div>
                    <CardLabel htmlFor="categoria">Categoria</CardLabel>
                    <CardSelect value={valorOp} onChange={aoDigitadoOp} id="categoria" name="categoria" required>
                        <Opcao value="">Selecione uma categoria</Opcao>
                        <Opcao value="Front End">Front End</Opcao>
                        <Opcao value="Back End">Back End</Opcao>
                        <Opcao value="Inovação">Inovação</Opcao>
                        <Opcao value="Gestão">Gestão</Opcao>
                    </CardSelect>
                </div>
                <div>
                    <CardLabel htmlFor="imagem">Imagem</CardLabel>
                    <CardInput value={valorImg} onChange={aoDigitadoImg} type="url" id="imagem" name="imagem" />
                </div>
                <div>
                    <CardLabel htmlFor="video">Vídeo</CardLabel>
                    <CardInput value={valorLink} onChange={aoDigitadoLink} type="url" id="video" name="video" placeholder="https://www.youtube.com/watch?v=..." />
                </div>
                <div>
                    <CardLabel htmlFor="descricao">Descrição</CardLabel>
                    <CardTextarea value={valorCampo} onChange={aoDigitadoCampo} id="descricao" name="descricao" rows="4" required></CardTextarea>
                </div>
                <CardButtonSection>
                    <CardButton onClick={aoSalvar} type="submit">Salvar</CardButton>
                    <CardButton type="reset">Limpar</CardButton>
                </CardButtonSection>
            </form>
        </CardContainer>
    );
};

export default EditarCard;
