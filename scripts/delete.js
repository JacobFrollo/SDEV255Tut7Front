addEventListener("DOMContentLoaded", async function () {
    document.querySelector("#deletebtn").addEventListener("click", deleteSong);
    getAllSongs()
})

async function getAllSongs() {
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/songs")
    if (response.ok) {
        const songs = await response.json()
        let html = ""
        for (let song of songs) {
            html += `<option value="${song._id}">${song.title}</option>`
        }
        document.querySelector("#songDropDown").innerHTML = html
    }
}

async function deleteSong() {
    const songID = document.querySelector("#songDropDown option:ckecked").value
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/songs" + songID, {
        method: "DELETE"
    })
    if (response.ok) {
        getAllSongs()
    }
    else {
        document.querySelector("error").innerHTML = "Cannot delete song"
    }
}
