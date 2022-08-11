//Start screen

var startscreen = document.getElementById('startscreen');
var boxsommaire = document.getElementById('boxsommaire');

function ajustement()
{
startscreen.style.width = window.innerWidth +'px';
startscreen.style.height = window.innerHeight + 'px';
}

ajustement()

window.addEventListener("resize",ajustement);

function enleverstartscren()
{
startscreen.style.display = "none";
boxsommaire.style.display = "flex";
}
startscreen.addEventListener('click',enleverstartscren)

// Fin Start Screen
var logobarrehaut = document.getElementById('logobarrehaut');
var menu = document.getElementById('menu');
function retirermenu(){
   if(menu.className=="menu0"){menu.className="menu1"}
   else{menu.className="menu0"}
    
}
logobarrehaut.addEventListener('click',retirermenu);

//incrementation Date
var d = new Date();

    var annee = d.getFullYear();
    var mois = d.getMonth()+1;
    var jour = d.getDate();
    var heure = d.getHours();
    var minute = d.getMinutes();
    var seconde = d.getSeconds();

var moisl = ''

if(mois == 1){moisl="Janiver"}
else if (mois == 2){moisl="Jévrier"}
else if (mois == 3){moisl="Mars"}
else if (mois == 4){moisl="Avril"}
else if (mois == 5){moisl="Mai"}
else if (mois == 6){moisl="Juin"}
else if (mois == 7){moisl="Juillet"}
else if (mois == 8){moisl="Août"}
else if (mois == 9){moisl="Septembre"}
else if (mois == 10){moisl="octobre"}
else if (mois == 11){moisl="Novembre"}
else if (mois == 12){moisl="Décembre"};


var ladate = document.getElementById('ladate');
ladate.innerHTML =  jour + " " + moisl + " " + annee;

//Fin incrementation Date


// Menu Mobile deroulement

var menu2 = document.getElementById('menu2');


function deroulementmenumobile()
{
if (menu2.className == "menu20")
{   
    menu2.className = "menu21"
    menu2.style.width = "fit-content"
    menu2.style.height ="380px"
    menu2.style.boxShadow = "1px 3px 12px rgba(0, 0, 0, 0.423)"
    menu2.style.backgroundColor="rgba(0, 0, 0, 0.723)"
    
}
else
{
    menu2.className ="menu20"
    menu2.style.width = "35%"
    menu2.style.height ="60px"
    menu2.style.boxShadow = "1px 1px 8px rgba(0, 0, 0, 0)"
    menu2.style.backgroundColor="black"
};
}

function deroulementmenumobileleave()
{
if (menu2.className == "menu21")
{   
    menu2.className ="menu20"
   menu2.style.width = "35%"
    menu2.style.height ="60px"
    menu2.style.boxShadow = "1px 1px 8px rgba(255, 255, 255, 0)"
    
};

}

menu2.addEventListener('mouseup',deroulementmenumobile);
menu2.addEventListener('mouseleave',deroulementmenumobileleave);


// Fin Menu Mobile deroulement


//ouverture des fenetres Boxes...

var boxblocbt = document.getElementById('boxblocbt');
var boxlivresbt = document.getElementById('boxlivresbt');
var boxflyersbt = document.getElementById('boxflyersbt');
var boxportedocbt = document.getElementById('boxportedocbt');

var boxblocnotes = document.getElementById('boxblocnotes');
var boxlivres = document.getElementById('boxlivres');
var boxflyers = document.getElementById('boxflyers');
var boxporte = document.getElementById('boxporte');
var boxparametrage = document.getElementById('boxparametrage');



function ouvrirsommaire()
{
boxsommaire.className = "boxsommaire1"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}




function ouvrirblocnotes()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes1"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}



function ouvrirlivres()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres1"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}

function ouvrirflyers()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers1"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage0"
}

function ouvrirporte()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte1"
boxparametrage.className = "boxparametrage0"
}

function ouvrirparametrage()
{
boxsommaire.className = "boxsommaire0"
boxblocnotes.className = "boxblocnotes0"
boxlivres.className = "boxlivres0"
boxflyers.className = "boxflyers0"
boxporte.className = "boxporte0"
boxparametrage.className = "boxparametrage1"
}


boxblocbt.addEventListener('click',ouvrirblocnotes);
boxblocbt.addEventListener('click',remonteenhaut);

boxlivresbt.addEventListener('click',ouvrirlivres);
boxlivresbt.addEventListener('click',remonteenhaut);

boxflyersbt.addEventListener('click',ouvrirflyers);
boxflyersbt.addEventListener('click',remonteenhaut);

boxportedocbt.addEventListener('click',ouvrirporte);
boxportedocbt.addEventListener('click',remonteenhaut);

var sommairebt = document.getElementById('sommairebt');
var blocbt = document.getElementById('blocbt');
var livresbt = document.getElementById('livresbt');
var flyersbt = document.getElementById('flyersbt');
var portedocbt = document.getElementById('portedocbt');
var parametragebt = document.getElementById('parametragebt');

sommairebt.addEventListener('click',ouvrirsommaire);
sommairebt.addEventListener('click',remonteenhaut);

blocbt.addEventListener('click',ouvrirblocnotes);
blocbt.addEventListener('click',remonteenhaut);

livresbt.addEventListener('click',ouvrirlivres);
livresbt.addEventListener('click',remonteenhaut);

flyersbt.addEventListener('click',ouvrirflyers);
flyersbt.addEventListener('click',remonteenhaut);

portedocbt.addEventListener('click',ouvrirporte);
portedocbt.addEventListener('click',remonteenhaut);

parametragebt.addEventListener('click',ouvrirparametrage);
parametragebt.addEventListener('click',remonteenhaut);


var sommairebtm = document.getElementById('sommairebtm');
var blocbtm = document.getElementById('blocbtm');
var livresbtm = document.getElementById('livresbtm');
var flyersbtm = document.getElementById('flyersbtm');
var portedocbtm = document.getElementById('portedocbtm');
var parametragebtm = document.getElementById('parametragebtm');

sommairebtm.addEventListener('click',ouvrirsommaire);
sommairebtm.addEventListener('click',remonteenhaut);

blocbtm.addEventListener('click',ouvrirblocnotes);
blocbtm.addEventListener('click',remonteenhaut);

livresbtm.addEventListener('click',ouvrirlivres);
livresbtm.addEventListener('click',remonteenhaut);

flyersbtm.addEventListener('click',ouvrirflyers);
flyersbtm.addEventListener('click',remonteenhaut);

portedocbtm.addEventListener('click',ouvrirporte);
portedocbtm.addEventListener('click',remonteenhaut);

parametragebtm.addEventListener('click',ouvrirparametrage);
parametragebtm.addEventListener('click',remonteenhaut);

//    *************************************************Fin ouverture des fenetres Boxes...*************************



//bounton pour remonter vers le haut


var scrollval = 0;

function affichebtscroll(){
    scrollval = window.scrollY
    if (scrollval > 150)
    {bthaut.className="bthaut1"}
    else {bthaut.className="bthaut0"}


}

window.addEventListener('scroll',affichebtscroll);

var bthaut = document.getElementById('bthaut');
var hautdelapage = document.getElementById('hautdelapage');
bthaut.addEventListener('click',remonteenhautsmooth);

function remonteenhautsmooth()
{
    hautdelapage.scrollIntoView({behavior:"smooth"});
}
function remonteenhaut()
{
    hautdelapage.scrollIntoView();
}