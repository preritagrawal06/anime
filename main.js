let id = Math.ceil(Math.random()*1000);
let charImg = document.getElementById("charImg");
let charName = document.getElementById("charName");
let about = document.getElementById("about");
let animeName = document.getElementById("animeName");
url = `https://api.jikan.moe/v4/characters/${id}`;
url_anime = `https://api.jikan.moe/v4/characters/${id}/anime`

fetch(url).then(Response => {
    return Response.json();
}).then(data => {
    console.log(data.data);
    charImg.setAttribute("src",`${data.data.images.jpg.image_url}`);
    charName.innerHTML = `${data.data.name}`;
    let charAbout = `${data.data.about}`;
    let pointer = charAbout.indexOf('.');
    console.log(pointer);
    // about.innerHTML = `${charAbout.substring(0,pointer+1)}`
})
fetch(url_anime).then(response => {
    return response.json();
}).then(data => {
    console.log(data.data[0].anime.title);
    animeName.innerHTML = `${data.data[0].anime.title}`
})