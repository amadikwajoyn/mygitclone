export const useQuery = () => {
    const { href } = window.location
    const url = new URL(href)
    const params = new URLSearchParams(url.search)
    const query = {}
    params.forEach((value, key) => {
        query[key] = value
    })

    return {
        url,
        query,
    }
}