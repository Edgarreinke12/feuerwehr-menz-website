function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

function toggleDark(){
  document.body.classList.toggle("dark");
}


function toggleMenu(){
let menu=document.getElementById("menu");
menu.classList.toggle("show");
}

function searchEinsatz(){
let input=document.getElementById("search").value.toLowerCase();
let einsaetze=document.querySelectorAll(".einsatz");
einsaetze.forEach(function(e){
let text=e.innerText.toLowerCase();
if(text.includes(input)){
e.style.display="block";
}else{
e.style.display="none";
}
});
}

// Besucherzähler
let visits=localStorage.getItem("visits")||0;
visits++;
localStorage.setItem("visits",visits);

// Countdown Beispiel
let eventDate=new Date("April 20, 2026 18:00:00");
function countdown(){
  let now=new Date();
  let diff=eventDate-now;
  if(diff>0){
    let days=Math.floor(diff/(1000*60*60*24));
    let el=document.getElementById("countdown");
    if(el){el.innerText=days+" Tage";}
  }
}
setInterval(countdown,1000);

function toggleMenu(){

  document.getElementById("menu").classList.toggle("show");
  
  }

  function toggleDark(){

    document.body.classList.toggle("dark");
    
    }


function addEinsatz(){
let datum=document.getElementById("datum").value;
let art=document.getElementById("art").value;
let titel=document.getElementById("titel").value;
let beschreibung=document.getElementById("beschreibung").value;
let einsatz={datum,art,titel,beschreibung};
let einsaetze=JSON.parse(localStorage.getItem("einsaetze"))||[];
einsaetze.push(einsatz);
localStorage.setItem("einsaetze",JSON.stringify(einsaetze));
alert("Einsatz gespeichert");

}

// WALDBRANDSTUFE (nur diese Zahl ändern)

let stufe = 3;

let text="";
let farbe="";

if(stufe==1){text="Sehr geringe Gefahr";farbe="green";}
if(stufe==2){text="Geringe Gefahr";farbe="green";}
if(stufe==3){text="Mittlere Gefahr";farbe="orange";}
if(stufe==4){text="Hohe Gefahr";farbe="red";}
if(stufe==5){text="Sehr hohe Gefahr";farbe="darkred";}

document.getElementById("stufeText").innerText="Stufe "+stufe;
document.getElementById("stufeBeschreibung").innerText=text;
document.getElementById("waldbrandBox").style.background=farbe;


// WETTERDATEN (Beispiel)

document.getElementById("temp").innerText="18 °C";
document.getElementById("wind").innerText="12 km/h";
document.getElementById("regen").innerText="0 mm";