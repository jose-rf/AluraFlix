export const saveVideo = async (video) => {
    try {
        const response = await fetch('http://localhost:3001/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        });

        if (response.ok) {
            console.log('Video salvo com sucesso');
            return true;
        } else {
            console.error('Falha ao salvar o video');
            return false;
        }
    } catch (error) {
        console.error('Erro ao salvar o video:', error);
        return false;
    }
};
