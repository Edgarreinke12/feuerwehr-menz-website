*{
box-sizing:border-box;
}

body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
background:#111;
color:#fff;
}


/* HEADER */

header{
background:#c40000;
color:white;
padding:10px;
}

.header-top{
display:flex;
justify-content:space-between;
align-items:center;
}

.header-box{
display:flex;
justify-content:space-between;
align-items:center;
}


/* BURGER */

.burger{
position:absolute;
top:10px;
right:15px;
font-size:28px;
background:none;
border:none;
color:white;
cursor:pointer;
}


/* SEITENMENÜ */

#menu{
position:fixed;
top:0;
right:-280px;
width:280px;
height:100vh;
background:#111;
display:flex;
flex-direction:column;
transition:0.3s;
z-index:1000;
box-shadow:-5px 0 15px rgba(0,0,0,0.5);
}

#menu.show{
right:0;
}

#menu a{
padding:16px;
color:white;
text-decoration:none;
border-bottom:1px solid #222;
font-size:18px;
}

#menu a:hover{
background:#333;
}


/* HERO STARTSEITE */

.hero{
height:380px;
background:url("bilder/feuerwehrhaus.jpg") center/cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero h2{
background:rgba(0,0,0,.5);
padding:12px 20px;
border-radius:8px;
}


/* CONTAINER */

.container{
padding:25px;
}


/* KARTEN */

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-top:20px;
}

.card{
background:#1e1e1e;
padding:20px;
border-radius:10px;
text-align:center;
text-decoration:none;
color:#fff;
transition:.25s;
}

.card:hover{
transform:scale(1.05);
}


/* EINSÄTZE */

.einsatzliste{
display:flex;
flex-direction:column;
gap:15px;
max-width:900px;
}

.einsatz{
display:flex;
flex-direction:row;
gap:15px;
background:#1e1e1e;
padding:15px;
border-radius:10px;
margin-bottom:15px;
width:100%;
}

.einsatz-bild{
width:120px;
height:90px;
object-fit:cover;
border-radius:6px;
}

.einsatz-text{
flex:1;
}

.brand{
border-left:8px solid #ff2d2d;
}

.hilfe{
border-left:8px solid #2d6bff;
}

.bma{
border-left:8px solid #ffd000;
}

.sonst{
border-left:8px solid #2dff6b;
}


/* FAHRZEUGE */

.vehicle-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:20px;
}

.vehicle-card{
background:#1e1e1e;
border-radius:10px;
padding:15px;
text-align:center;
}

.vehicle-card img{
width:100%;
height:180px;
object-fit:cover;
border-radius:6px;
}


/* FAHRZEUG SEITE */

.fahrzeug-bild{
width:100%;
max-width:900px;
border-radius:10px;
display:block;
margin:20px auto;
}


/* BELADUNG */

.beladung-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:10px;
margin-top:15px;
}

.beladung-grid img{
width:100%;
border-radius:8px;
}


/* GALERIE */

.gallery{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:15px;
margin-top:20px;
}

.gallery img{
width:100%;
height:220px;
object-fit:cover;
border-radius:10px;
}


/* STATISTIK */

.stats{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
gap:20px;
margin-top:20px;
}

.stats div{
background:#1e1e1e;
padding:20px;
border-radius:8px;
text-align:center;
}


/* WETTER */

.wetter{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
gap:20px;
margin-top:20px;
}

.wetter div{
background:#1e1e1e;
padding:20px;
border-radius:10px;
text-align:center;
}

#waldbrandBox{
width:100%;
padding:40px;
text-align:center;
border-radius:10px;
color:black;
font-size:28px;
font-weight:bold;
margin-top:20px;
}


/* FOOTER */

footer{
background:#000;
text-align:center;
padding:15px;
margin-top:30px;
}


/* DARKMODE */

.dark{
background:#eee;
color:#111;
}

.dark .card,
.dark .einsatz,
.dark .vehicle-card{
background:#ddd;
color:#000;
}


/* MOBILE */

@media(max-width:700px){

.gallery{
grid-template-columns:repeat(2,1fr);
}

.beladung-grid{
grid-template-columns:repeat(2,1fr);
}

}
