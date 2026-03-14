// BURGER MENÜ

function toggleMenu(){
let menu=document.getElementById("menu");
menu.classList.toggle("show");
}


// DARK MODE

function toggleDark(){
document.body.classList.toggle("dark");
}


// EINSATZ SUCHE

function searchEinsatz(){

let input=document.getElementById("search").value.toLowerCase();
let einsaetze=document.querySelectorAll(".einsatz");

einsaetze.forEach(function(e){

let text=e.innerText.toLowerCase();

if(text.includes(input)){
e.style.display="flex";
}else{
e.style.display="none";
}

});

}


// BESUCHERZÄHLER

let visits=localStorage.getItem("visits") || 0;

visits++;

localStorage.setItem("visits",visits);

console.log("Besucher:",visits);


// COUNTDOWN FÜR VERANSTALTUNG

let eventDate=new Date("April 20, 2026 18:00:00");

function countdown(){

let now=new Date();

let diff=eventDate-now;

if(diff>0){

let days=Math.floor(diff/(1000*60*60*24));

let el=document.getElementById("countdown");

if(el){

el.innerText=days+" Tage";

}

}

}

setInterval(countdown,1000);




// EINSATZ SPEICHERN (ADMIN)

function addEinsatz(){

let datum=document.getElementById("datum").value;
let art=document.getElementById("art").value;
let titel=document.getElementById("titel").value;
let beschreibung=document.getElementById("beschreibung").value;

let einsatz={
datum,
art,
titel,
beschreibung
};

let einsaetze=JSON.parse(localStorage.getItem("einsaetze")) || [];

einsaetze.push(einsatz);

localStorage.setItem("einsaetze",JSON.stringify(einsaetze));

alert("Einsatz gespeichert");

}




// WALDBRANDSTUFE (MANUELL ÄNDERN)

let stufe=3;

let text="";
let farbe="";

if(stufe==1){
text="Sehr geringe Gefahr";
farbe="green";
}

if(stufe==2){
text="Geringe Gefahr";
farbe="green";
}

if(stufe==3){
text="Mittlere Gefahr";
farbe="orange";
}

if(stufe==4){
text="Hohe Gefahr";
farbe="red";
}

if(stufe==5){
text="Sehr hohe Gefahr";
farbe="darkred";
}

let stufeText=document.getElementById("stufeText");
let stufeBeschreibung=document.getElementById("stufeBeschreibung");
let waldbrandBox=document.getElementById("waldbrandBox");

if(stufeText && stufeBeschreibung && waldbrandBox){

stufeText.innerText="Stufe "+stufe;
stufeBeschreibung.innerText=text;
waldbrandBox.style.background=farbe;

}




// WETTERDATEN (BEISPIEL)

let temp=document.getElementById("temp");
let wind=document.getElementById("wind");
let regen=document.getElementById("regen");

if(temp && wind && regen){

temp.innerText="18 °C";
wind.innerText="12 km/h";
regen.innerText="0 mm";

}




// GALERIE VOLLBILD

function openImage(img){

let lightbox=document.getElementById("lightbox");
let lightboxImg=document.getElementById("lightbox-img");

if(lightbox && lightboxImg){

lightbox.style.display="flex";
lightboxImg.src=img.src;

}

}

function closeImage(){

let lightbox=document.getElementById("lightbox");

if(lightbox){

lightbox.style.display="none";

}

}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let correctEmail="mitglied@feuerwehr-menz.de";
let correctPassword="feuerwehr123";

if(email===correctEmail && password===correctPassword){

localStorage.setItem("loggedIn","true");

window.location.href="intern.html";

}else{

document.getElementById("error").innerText="Login falsch";

}

}
