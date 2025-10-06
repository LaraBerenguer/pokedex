export const getUrlId = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    const id = parts[parts.length - 1];
    return id;
};