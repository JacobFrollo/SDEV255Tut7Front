addEventListener("DOMContentLoaded", async function () {
    document.querySelector("updatebttn").addEventListener("click", updateSong)
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/songs" + songID)
    if (response.ok) {
        let song = await response.json()
        document.querySelector("#songId").value = song._id
        document.querySelector("#title").value = song.title
        document.querySelector("#artist").value = song.artist
        document.querySelector("#released").value = song.releaseDate.substring(0, 10)
        document.querySelector("#popularity").value = song.popularity
        document.querySelector("#genre").value = song.genre
    }
})

async function updateSong() {
    const songID = document.querySelector("#songId").value
    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        release: document.querySelector("#release").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ?
            document.querySelector("#genre").value.split(",") : []
    }
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/songs" + songID, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song)

    })

    if (response.ok) {
        alert("Updated Song")
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot update song"
    }

}
