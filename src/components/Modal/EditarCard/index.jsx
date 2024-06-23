import React from 'react';
import styled from 'styled-components';

// Estilizando o container principal do EditarCard
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

// Estilizando o título h1 dentro do EditarCard
const CardTitle = styled.h1`
    color: #2271D1;
    font-weight: 700;
    font-size: 32px;
`;

// Estilizando labels dentro do EditarCard
const CardLabel = styled.label`
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;

// Estilizando inputs, selects e textareas dentro do EditarCard
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

// Estilizando botões dentro do EditarCard
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

// Estilizando a seção de botões dentro do EditarCard
const CardButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EditarCard = ({ titulo }) => {
    return (
        <CardContainer>
            <CardTitle>{titulo}</CardTitle>
            <form action="/salvar-dados" method="post">
                <div>
                    <CardLabel htmlFor="titulo">Título</CardLabel>
                    <CardInput type="text" id="titulo" name="titulo" required />
                </div>
                <div>
                    <CardLabel htmlFor="categoria">Categoria</CardLabel>
                    <CardSelect id="categoria" name="categoria" required>
                        <option value="">Selecione uma categoria</option>
                        <option value="tecnologia">Front End</option>
                        <option value="entretenimento">Back End</option>
                        <option value="educação">Inovação</option>
                        <option value="saúde">Gestão</option>
                    </CardSelect>
                </div>
                <div>
                    <CardLabel htmlFor="imagem">Imagem</CardLabel>
                    <CardInput type="link" id="imagem" name="imagem" />
                </div>
                <div>
                    <CardLabel htmlFor="video">Vídeo</CardLabel>
                    <CardInput type="url" id="video" name="video" placeholder="https://www.youtube.com/watch?v=..." />
                </div>
                <div>
                    <CardLabel htmlFor="descricao">Descrição</CardLabel>
                    <CardTextarea id="descricao" name="descricao" rows="4" required></CardTextarea>
                </div>
                <CardButtonSection>
                    <CardButton type="submit">Salvar</CardButton>
                    <CardButton type="reset">Limpar</CardButton>
                </CardButtonSection>
            </form>
        </CardContainer>
    );
};

export default EditarCard;
