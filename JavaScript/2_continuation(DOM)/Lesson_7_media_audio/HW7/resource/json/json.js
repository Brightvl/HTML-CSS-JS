export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Не удалось получить сведения из data.json`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
