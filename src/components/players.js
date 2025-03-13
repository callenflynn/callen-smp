async function fetchServerStatus() {
    const response = await fetch("https://api.mcstatus.io/v2/status/java/course-survivor.gl.joinmc.link");
    const data = await response.json();
    
    if (data.online) {
        let players = data.players.list ? data.players.list.map(p => p.name).join(", ") : "No players online";
        document.getElementById("status").innerHTML = `Online ✅ | Players: ${data.players.online}/${data.players.max} <br> ${players}`;
    } else {
        document.getElementById("status").innerHTML = "Offline ❌";
    }
}

fetchServerStatus();
setInterval(fetchServerStatus, 60000);
