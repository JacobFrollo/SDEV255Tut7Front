let token

document.querySelector("#loginBtn").addEventListener("click", async function(){
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    signup(username,password)

})
async function signup(username, password) {
    document.querySelector("#errorMsg").innerHTML = "";
 
    const response = await fetch("https://flaxen-regular-countess.glitch.me/api/user", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });
 
    if (response.ok) {
        alert("Sign up complete")
        window.location.href = "/index.html"
     
    }
    else {
       document.querySelector("#errorMsg").innerHTML = "Bad username/password.";
    }
 }
