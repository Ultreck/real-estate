const baseUrl = process.env.NEXT_BASE_URL as string;
export default async function getUser() {
    try {
        const res = await fetch(`${baseUrl}/api/user`, { method: "GET" });
        if (!res.ok) {
        throw new Error("Failed to fetch user");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};