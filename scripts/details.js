addEventListener("DOMContentLoaded", async function () {
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get("id")
    console.log(songID)

    const response = await fetch("localhost:300/api/songs" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `Welcome to the ${song.title} page`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
    <h3>Artist - ${song.artist}</h3>
    <h3>Popularity - ${song.popularity}</h3>
    <h3>Genre - ${song.genre}</h3>
    `
    document.querySelector("div").innerHTML = html
})