import styled from 'styled-components';
import EditarCard from './EditarCard';

const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const ModalDialog = styled.dialog`
  width: 900px;
  padding-bottom: 5rem;
  border: 5px solid #6BD1FF;
  background-color: #03122F;
  border-radius: 10px;
  color: white;
  position: absolute;
  top: 600px;
  justify-content: center;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CloseButtonImg = styled.img`
  width: 40px;
  display: block;
`;

function ModalZoom({ isOpen, onClose, videoToEdit, onSave }) {
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <ModalDialog open={true}>
            <CloseButton onClick={onClose}>
              <CloseButtonImg src="/imagens/X-cancel.png" alt="Botão Fechar" />
            </CloseButton>
            <EditarCard 
              titulo="EDITAR VIDEO:" 
              subtitulo="Atualize as informações do vídeo"
              videoToEdit={videoToEdit}
              onSave={onSave}
            />
            <form method="dialog"></form>
          </ModalDialog>
        </>
      )}
    </>
  );
}

export default ModalZoom;
