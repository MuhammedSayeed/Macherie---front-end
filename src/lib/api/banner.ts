export const getBanner = async (type: string) => {
    try {
        const res = await fetch(`http://localhost:3001/api/v1/banners/${type}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        return data.results || [];
    } catch (error) {
        console.error(`Failed to fetch ${type} banner:`, error);
        return [];
    }
};