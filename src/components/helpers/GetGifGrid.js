export const GetGifGrid = async (category) => {

    const apiKey = 'Nd2Bxn3gVEnmUiWf005U7TnbRjCay0Ip'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=${apiKey}`

    const resp = await fetch(url)
    if (!resp.ok) throw console.log('hay un error');
    const { data } = await resp.json()
    const gif = data.map((gif) => {
        const { id, title, images } = gif;
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
    })
    return gif;
}