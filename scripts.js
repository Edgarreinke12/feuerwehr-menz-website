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
e.style.display = "flex";
}else{
e.style.display = "none";
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

let stufe = 3;

let beschreibung = "";
let farbe = "";

if(stufe==1){beschreibung="Sehr geringe Gefahr";farbe="green";}
if(stufe==2){beschreibung="Geringe Gefahr";farbe="green";}
if(stufe==3){beschreibung="Mittlere Gefahr";farbe="orange";}
if(stufe==4){beschreibung="Hohe Gefahr";farbe="red";}
if(stufe==5){beschreibung="Sehr hohe Gefahr";farbe="darkred";}

let stufeText = document.getElementById("stufeText");
let stufeBeschreibung = document.getElementById("stufeBeschreibung");
let waldbrandBox = document.getElementById("waldbrandBox");

if(stufeText && stufeBeschreibung && waldbrandBox){

stufeText.innerText = "Stufe " + stufe;
stufeBeschreibung.innerText = beschreibung;
waldbrandBox.style.background = farbe;

}


// --------------------
// WETTERDATEN (Beispiel)
// --------------------

let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let regen = document.getElementById("regen");

if(temp && wind && regen){

temp.innerText = "18 °C";
wind.innerText = "12 km/h";
regen.innerText = "0 mm";

}


// --------------------
// GALERIE VOLLBILD
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
