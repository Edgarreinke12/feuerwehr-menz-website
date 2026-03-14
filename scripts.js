// --------------------
// BURGER MENÜ
// --------------------

function toggleMenu(){

let menu = document.getElementById("menu");

if(menu){
menu.classList.toggle("show");
}

}

// Menü schließen bei Klick außerhalb

document.addEventListener("click", function(event){

let menu = document.getElementById("menu");
let burger = document.querySelector(".burger");

if(menu && burger){

if(!menu.contains(event.target) && !burger.contains(event.target)){
menu.classList.remove("show");
}

}

});


// --------------------
// LOGIN SYSTEM
// --------------------

let users = {

"edgar":"feuerwehr1",
"frank":"feuerwehr2",
"rene":"feuerwehr3",
"steven":"feuerwehr4"

};


function login(){

let user = document.getElementById("email").value.trim().toLowerCase();
let password = document.getElementById("password").value.trim();

if(users[user] === password){

localStorage.setItem("loggedIn","true");
localStorage.setItem("user",user);

window.location.href="intern.html";

}else{

document.getElementById("error").innerText="Benutzername oder Passwort falsch";

}

}

}


// --------------------
// LOGOUT
// --------------------

function logout(){

localStorage.removeItem("loggedIn");
localStorage.removeItem("user");

window.location.href="login.html";

}


// --------------------
// INTERN MENÜ ANZEIGEN
// --------------------

window.addEventListener("load",function(){

let internLinks = document.querySelectorAll(".internLink");

if(localStorage.getItem("loggedIn")==="true"){

internLinks.forEach(link=>{
link.style.display="block";
});

}else{

internLinks.forEach(link=>{
link.style.display="none";
});

}

});


// --------------------
// BENUTZERNAME ANZEIGEN
// --------------------

window.addEventListener("load",function(){

let user = localStorage.getItem("user");

let box = document.getElementById("userName");

if(box && user){
box.innerText="👨‍🚒 Angemeldet: "+user;
}

});


// --------------------
// DARK MODE
// --------------------

function toggleDark(){
document.body.classList.toggle("dark");
}


// --------------------
// EINSATZ SUCHE
// --------------------

function searchEinsatz(){

let input = document.getElementById("search");

if(!input) return;

let text = input.value.toLowerCase();

let einsaetze = document.querySelectorAll(".einsatz");

einsaetze.forEach(function(e){

let content = e.innerText.toLowerCase();

if(content.includes(text)){
e.style.display="flex";
}else{
e.style.display="none";
}

});

}


// --------------------
// BESUCHERZÄHLER
// --------------------

let visits = localStorage.getItem("visits") || 0;

visits++;

localStorage.setItem("visits", visits);


// --------------------
// COUNTDOWN
// --------------------

let eventDate = new Date("April 20, 2026 18:00:00");

function countdown(){

let el = document.getElementById("countdown");

if(!el) return;

let now = new Date();

let diff = eventDate - now;

if(diff > 0){

let days = Math.floor(diff/(1000*60*60*24));

el.innerText = days + " Tage";

}

}

setInterval(countdown,1000);


// --------------------
// WALDBRANDSTUFE
// --------------------

let stufe = 1;

function ladeWaldbrand(){

let beschreibung="";
let farbe="";

if(stufe==1){beschreibung="Sehr geringe Waldbrandgefahr.";farbe="#2ecc71";}
if(stufe==2){beschreibung="Geringe Waldbrandgefahr.";farbe="#8bc34a";}
if(stufe==3){beschreibung="Mittlere Waldbrandgefahr. Offenes Feuer vermeiden.";farbe="#f1c40f";}
if(stufe==4){beschreibung="Hohe Waldbrandgefahr. Wälder möglichst meiden.";farbe="#e67e22";}
if(stufe==5){beschreibung="Sehr hohe Waldbrandgefahr. Höchste Vorsicht.";farbe="#e74c3c";}

let stufeText = document.getElementById("stufe");
let beschreibungText = document.getElementById("beschreibung");
let box = document.getElementById("waldbrandBox");

if(stufeText && beschreibungText && box){

stufeText.innerText="Stufe "+stufe;
beschreibungText.innerText=beschreibung;
box.style.background=farbe;

}

}

window.addEventListener("load",ladeWaldbrand);


// --------------------
// GALERIE LIGHTBOX
// --------------------

function openImage(img){

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){

lightbox.style.display="flex";
lightboxImg.src = img.src;

}

}

function closeImage(){

let lightbox = document.getElementById("lightbox");

if(lightbox){
lightbox.style.display="none";
}

}
