// --------------------
// BURGER MENÜ
// --------------------

function toggleMenu(){

let menu = document.getElementById("menu");

if(menu){
menu.classList.toggle("show");
}

}


// Menü schließen wenn außerhalb geklickt wird

document.addEventListener("click", function(event){

let menu = document.getElementById("menu");
let burger = document.querySelector(".burger");

if(menu && burger){

if(!menu.contains(event.target) && !burger.contains(event.target)){
menu.classList.remove("show");
}

}

});


// Menü schließen wenn Menülink geklickt wird

document.querySelectorAll("#menu a").forEach(function(link){

link.addEventListener("click", function(){

let menu = document.getElementById("menu");

if(menu){
menu.classList.remove("show");
}

});

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

let filter = input.value.toLowerCase();

let einsaetze = document.querySelectorAll(".einsatz");

einsaetze.forEach(function(e){

let text = e.innerText.toLowerCase();

if(text.includes(filter)){
e.style.display = "flex";
}else{
e.style.display = "none";
}

});

}


// --------------------
// BESUCHERZÄHLER
// --------------------

let visits = localStorage.getItem("visits");

if(!visits){
visits = 1;
}else{
visits = parseInt(visits) + 1;
}

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

}else{

el.innerText = "Event läuft";

}

}

setInterval(countdown,1000);


// --------------------
// EINSATZ SPEICHERN
// --------------------

function addEinsatz(){

let datum = document.getElementById("datum");
let art = document.getElementById("art");
let titel = document.getElementById("titel");
let beschreibung = document.getElementById("beschreibung");

if(!datum || !art || !titel || !beschreibung) return;

let einsatz = {
datum: datum.value,
art: art.value,
titel: titel.value,
beschreibung: beschreibung.value
};

let einsaetze = JSON.parse(localStorage.getItem("einsaetze")) || [];

einsaetze.push(einsatz);

localStorage.setItem("einsaetze", JSON.stringify(einsaetze));

alert("Einsatz gespeichert");

}


// --------------------
// WALDBRANDSTUFE
// --------------------

function ladeWaldbrand(){

let stufe = 3;

let beschreibung = "";
let farbe = "";

if(stufe==1){beschreibung="Sehr geringe Waldbrandgefahr.";farbe="#2ecc71";}
if(stufe==2){beschreibung="Geringe Waldbrandgefahr.";farbe="#8bc34a";}
if(stufe==3){beschreibung="Mittlere Waldbrandgefahr.";farbe="#f1c40f";}
if(stufe==4){beschreibung="Hohe Waldbrandgefahr.";farbe="#e67e22";}
if(stufe==5){beschreibung="Sehr hohe Waldbrandgefahr.";farbe="#e74c3c";}

let stufeText = document.getElementById("stufe");
let beschreibungText = document.getElementById("beschreibung");
let box = document.getElementById("waldbrandBox");

if(stufeText && beschreibungText && box){

stufeText.innerText = "Stufe " + stufe;
beschreibungText.innerText = beschreibung;
box.style.background = farbe;

}

}

window.addEventListener("load", ladeWaldbrand);


// --------------------
// WETTERDATEN (Beispiel)
// --------------------

function ladeWetter(){

let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let regen = document.getElementById("regen");

if(temp && wind && regen){

temp.innerText = "18 °C";
wind.innerText = "12 km/h";
regen.innerText = "0 mm";

}

}

window.addEventListener("load", ladeWetter);


// --------------------
// GALERIE LIGHTBOX
// --------------------

function openImage(img){

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){

lightbox.style.display = "flex";
lightboxImg.src = img.src;

}

}

function closeImage(){

let lightbox = document.getElementById("lightbox");

if(lightbox){
lightbox.style.display = "none";
}

}


// --------------------
// LOGIN SYSTEM
// --------------------

function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let correctEmail = "mitglied@feuerwehr-menz.de";
let correctPassword = "feuerwehr123";

if(email === correctEmail && password === correctPassword){

localStorage.setItem("loggedIn","true");

window.location.href = "intern.html";

}else{

let error = document.getElementById("error");

if(error){
error.innerText = "Login falsch";
}

}

}


// --------------------
// LOGOUT
// --------------------

function logout(){

localStorage.removeItem("loggedIn");

window.location.href = "index.html";

}
