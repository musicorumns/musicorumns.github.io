function kolacic() {
    var cboja = iscitajCookie("backgroundColor");
    if (cboja) {
        document.body.style.backgroundColor = cboja;
    }
}

function prikazi(){
    document.getElementById('forma').style.display = 'block';
    document.getElementById('button').style.display = 'none';
}

function ponisti(){
    document.getElementById('forma').style.display = 'none';
    document.getElementById('button').style.display = 'inline-block';
    document.forma.marka.value = "nista";
    document.forma.telo.value = "nista";
    document.forma.vrat.value = "nista";
    document.forma.fretbord.value = "nista";
    document.forma.zice.value = "nista";
}

function napraviCookie(ime, vrednost, dani) {
    if (dani) {
        var datum = new Date();
        datum.setTime(datum.getTime()+(dani*24*60*60*1000));
        var istice = "; expires="+datum.toGMTString();
    }
    else var istice = "";
    document.cookie = ime+"="+vrednost+istice+"; path=/";
}

function iscitajCookie(ime) {
    var imeEQ = ime + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(imeEQ) == 0) return c.substring(imeEQ.length,c.length);
    }
    return null;
}

function boja(boja) {
    document.body.style.backgroundColor = boja;
    napraviCookie("backgroundColor", boja, 365);
}

var gitare = [
    {
        "marka": "ESP",
        "model": "M-100",
        "telo": "Basswood",
        "vrat": "Maple",
        "fretbord": "Rosewood",
        "zice": "6",
        "cena": "400",
        "slika": '<img src="esp/ltd m-100.jpg" height="250px">'
    },
    {
        "marka": "ESP",
        "model": "Eclipse",
        "telo": "Mahogany",
        "vrat": "Mahogany",
        "fretbord": "Rosewood",
        "zice": "6",
        "cena": "2000",
        "slika": '<img src="esp/eclipse.jpg" height="250px">'
    },
    {
        "marka": "ESP",
        "model": "Horizon",
        "telo": "Mahogany",
        "vrat": "Maple",
        "fretbord": "Ebony",
        "zice": "6",
        "cena": "1700",
        "slika": '<img src="esp/horizon.jpg" height="250px">'
    },
    {
        "marka": "Ibanez",
        "model": "RGAIX6FM",
        "telo": "Mahogany",
        "vrat": "Combo",
        "fretbord": "Ebony",
        "zice": "6",
        "cena": "800",
        "slika": '<img src="ibanez/rgaix6fm.jpg" height="250px">'
    },
    {
        "marka": "Ibanez",
        "model": "RGD7UCS",
        "telo": "Basswood",
        "vrat": "Combo",
        "fretbord": "Ebony",
        "zice": "7",
        "cena": "2500",
        "slika": '<img src="ibanez/rgd7ucs.jpg" height="250px">'
    },
    {
        "marka": "Ibanez",
        "model": "RG8",
        "telo": "Mahogany",
        "vrat": "Combo",
        "fretbord": "Rosewood",
        "zice": "8",
        "cena": "800",
        "slika": '<img src="ibanez/rg8.jpg" height="250px">'
    },
    {
        "marka": "Jackson",
        "model": "JS32T Kelly",
        "telo": "Basswood",
        "vrat": "Maple",
        "fretbord": "Rosewood",
        "zice": "6",
        "cena": "300",
        "slika": '<img src="jackson/js32t kelly.jpg" height="250px">'
    },
    {
        "marka": "Jackson",
        "model": "RRX24M",
        "telo": "Basswood",
        "vrat": "Maple",
        "fretbord": "Maple",
        "zice": "6",
        "cena": "600",
        "slika": '<img src="jackson/rrx24m.jpg" height="250px">'
    },
    {
        "marka": "Jackson",
        "model": "RG22-7",
        "telo": "Basswood",
        "vrat": "Maple",
        "fretbord": "Rosewood",
        "zice": "7",
        "cena": "300",
        "slika": '<img src="jackson/js22-7.jpg" height="250px">'
    },
];

function gitara() {
    var marka = document.forma.marka.value;
    var telo = document.forma.telo.value;
    var vrat = document.forma.vrat.value;
    var fretbord = document.forma.fretbord.value;
    var zice = document.forma.zice.value;
    var marke = [];
    if (marka != "nista") for (i = 0; i < gitare.length; i++) marke[i] = false;
    else for (i = 0; i < gitare.length; i++) marke[i] = true;
    var tela = [];
    if (telo != "nista") for (i = 0; i < gitare.length; i++) tela[i] = false;
    else for (i = 0; i < gitare.length; i++) tela[i] = true;
    var vratovi = [];
    if (vrat != "nista") for (i = 0; i < gitare.length; i++) vratovi[i] = false;
    else for (i = 0; i < gitare.length; i++) vratovi[i] = true;
    var fretbordi = [];
    if (fretbord != "nista") for (i = 0; i < gitare.length; i++) fretbordi[i] = false;
    else for (i = 0; i < gitare.length; i++) fretbordi[i] = true;
    var zicee = [];
    if (zice != "nista") for (i = 0; i < gitare.length; i++) zicee[i] = false;
    else for (i = 0; i < gitare.length; i++) zicee[i] = true;
    document.getElementById("gitare").innerHTML = '';
    try {
        var provera = false;
        var pom = [marka, telo, vrat, fretbord, zice];
        for (i = 0; i < pom.length; i++) if (pom[i] != "nista") provera = true;
        if (provera == false) throw "Izaberite barem jednu stavku.";
        else {
            var p = 0;
            if (marka != "nista") {
                for (i = 0; i < gitare.length; i++) if (gitare[i].marka == marka) marke[i] = true;
            }
            if (telo != "nista") {
                for (i = 0; i < gitare.length; i++) if (gitare[i].telo == telo) tela[i] = true;
            }
            if (vrat != "nista") {
                for (i = 0; i < gitare.length; i++) if (gitare[i].vrat == vrat) vratovi[i] = true;
            }
            if (fretbord != "nista") {
                for (i = 0; i < gitare.length; i++) if (gitare[i].fretbord == fretbord) fretbordi[i] = true;
            }
            if (zice != "nista") {
                for (i = 0; i < gitare.length; i++) if (gitare[i].zice == zice) zicee[i] = true;
            }
            for (i = 0; i < gitare.length; i++) {
                if (marke[i] == true && tela[i] == true && vratovi[i] == true && fretbordi[i] == true && zicee[i] == true) {
                    element(i);
                    p++;
                }
            }
            if (p == 0) alert("Na žalost nemamo gitaru sa izabranim specifikacijama.");
        }
    }
    catch (err) {
        alert(err);
    }
}

for (i = 0; i < gitare.length; i++) gitare[i].ime = gitare[i].marka + ' ' + gitare[i].model;

function element(i) {
    var ime = gitare[i].ime;
    var cena = gitare[i].cena;
    var slika = gitare[i].slika;
    document.getElementById("gitare").innerHTML += '<div style="background-color: #212121;border: 2px solid #EEE;text-align: center;color: #EEE;display: inline-block;margin: 30px 50px;width: 150px;padding: 20px 0px;" onclick="preview(' + i + ')">' + slika + '<p>' + ime + '<br>Cena: ' + cena + '€</p></div>';
}

function preview(i) {
    var marka = gitare[i].marka;
    var model = gitare[i].model;
    var telo = gitare[i].telo;
    var vrat = gitare[i].vrat;
    var fretbord = gitare[i].fretbord;
    var zice = gitare[i].zice;
    var cena = gitare[i].cena;
    var info = window.open("","","width=250px,height=200px,left=625px,top=100px")
    info.document.write("<h2>" + marka + " " + model + "</h2><p>Telo: " + telo + "</p><p>Vrat: " + vrat + "</p><p>Fretbord: " + fretbord + "</p><p>Broj žica: " + zice + "</p>");
    info.document.body.style.backgroundColor = "#212121";
    info.document.body.style.color = "#EEE";
    info.document.body.style.fontFamily = "Roboto";
}

function sve() {
    document.getElementById("gitare").innerHTML = '';
    for (i = 0; i < gitare.length; i++) element(i);
}

function esp() {
    document.getElementById("gitare").innerHTML = '';
    for (i = 0; i < gitare.length; i++)
        if (gitare[i].marka == "ESP") element(i);
}

function ibanez() {
    document.getElementById("gitare").innerHTML = '';
    for (i = 0; i < gitare.length; i++)
        if (gitare[i].marka == "Ibanez") element(i);
}

function jackson() {
    document.getElementById("gitare").innerHTML = '';
    for (i = 0; i < gitare.length; i++)
        if (gitare[i].marka == "Jackson") element(i);
}

function sortiraj() {
    var izbor = document.sortiranje.opcije.value;
    switch (izbor) {
        case "az":
            gitare.sort(function(a, b){
                var x = a.ime.toLowerCase();
                var y = b.ime.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            break;
        case "za":
            gitare.sort(function(a, b){
                var x = a.ime.toLowerCase();
                var y = b.ime.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            break;
        case "jeftinije":
            gitare.sort(function(a, b){return a.cena - b.cena});
            break;
        case "skuplje":
            gitare.sort(function(a, b){return b.cena - a.cena});
            break;
    }
    sve();
}