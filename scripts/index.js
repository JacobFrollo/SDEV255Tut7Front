document.addEventListener("DOMContentLoaded", function(){
    const loginlink = document.querySelector("#loginlink")

    if(!localStorage.getItem("isLoggedIn")){
        loginlink.href = "login.html"
        loginlink.textContent = "Login"
    }
    else{
        loginlink.href = "logout.html"
        loginlink.textContent = "Logout"
    }

})





addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/songs")
    const songs = await response.json()
    let html = ""
    for(let song of songs){
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html
})
