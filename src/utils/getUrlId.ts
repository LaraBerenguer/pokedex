export const getUrlId = (url: string) => {
    const id = url.charAt(url.length - 1)
    return id;
};