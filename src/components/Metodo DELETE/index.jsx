export async function deleteVideo(id, updateFunction) {
    try {
        const response = await fetch(`http://localhost:3001/videos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        updateFunction();

        return true;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return false;
    }
}
