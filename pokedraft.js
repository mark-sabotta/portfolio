function Poke (name, para, legend, banned){
    this.name = (name===undefined ? 'Missingno' : name)
    this.para = (para===undefined ? false : para)
    this.legend = (legend===undefined ? false: legend)
}
        
const obj = new Array(67)
const names = ["Meowscarada", "Skeledirge", "Quaquaval", "Oinkologne", "Spidops", "Lokix", "Pawmot", "Maushold", "Dachsbun", "Arboliva", "Squakabilly", "Garganacl", "Armarouge", "Ceruledge", "Bellibolt", "Kilowattrel", "Mabostiff", "Grafaiai", "Brambleghast", "Toedscruel", "Klawf", "Scovillain", "Rabsca", "Espathra", "Tinkaton", "Wugtrio", "Bombirdier", "Palafin", "Revavroom", "Cyclizar", "Orthworm", "Glimmora", "Houndstone", "Flamigo", "Cetitan", "Veluza", "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth", "Iron Thorns", "Roaring Moon", "Iron Valiant", "Baxcalibur", "Gholdengo", "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu",  "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves"]

for(i = 0; i < names.length; i++){
    obj[i] = new Poke(names[i])
    if(i>42 && i<57){
        obj[i].para = true
    }
    if(i>58){
        obj[i].legend = true
        if(i>64){
            obj[i].para = true
        }
    }
}

const psize = document.querySelector('#psize')
const gen = document.querySelector('#gen')

let banlista = ''
let banlistb = ''
let banlistc = ''
let banlistd = ''
let banliste = ''
for(i = 0; i<names.length; i++){
    if(i<13){
        banlista = banlista + '<input type="checkbox" id = "poke' + i + '"/>' + names[i] + '<br>'
    }else if(i<26){
        banlistb = banlistb + '<input type="checkbox" id = "poke' + i + '"/>' + names[i] + '<br>'
    }else if(i<39){
        banlistc = banlistc + '<input type="checkbox" id = "poke' + i + '"/>' + names[i] + '<br>'
    }else if(i<52){
        banlistd = banlistd + '<input type="checkbox" id = "poke' + i + '"/>' + names[i] + '<br>'
    }else {
        banliste = banliste + '<input type="checkbox" id = "poke' + i + '"/>' + names[i] + '<br>'
    }
}
bannera.innerHTML = banlista
bannerb.innerHTML = banlistb
bannerc.innerHTML = banlistc
bannerd.innerHTML = banlistd
bannere.innerHTML = banliste
let teamonea = ''
let teamtwoa = ''
let teamoneb = ''
let teamtwob = ''
gen.onclick = () => {
    teamonea = ''
    teamtwoa = ''
    teamoneb = ''
    teamtwob = ''
    let work = new Array
    for(i = 0; i < obj.length; i++){
        if(document.querySelector('#poke'+i).checked){
            continue
        }
        if(document.querySelector('#noPara').checked && obj[i].para){
            continue
        }
        if(document.querySelector('#noLegend').checked && obj[i].legend){
            continue
        }
        work.push(i)
    }
    if(psize.value > work.length/2){
        psize.value = work.length/2
    }
    for(i = work.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = work[i];
        work[i] = work[j];
        work[j] = k;
    }

    let teams = psize.value*2
    const h = psize.value
    const k = +h + 17
    for(i = 0; i < teams; i++){
        if(i < h){
            if(i < 17){
                teamonea = teamonea + obj[work[i]].name + "<br>"
            }else {
                teamoneb = teamoneb + obj[work[i]].name + "<br>"
            }
        }else{
            if(i < k){
                teamtwoa = teamtwoa + obj[work[i]].name + "<br>"
            }else {
                teamtwob = teamtwob + obj[work[i]].name + "<br>"
            }
            
        }
    }

    tonea.innerHTML = teamonea
    ttwoa.innerHTML = teamtwoa
    toneb.innerHTML = teamoneb
    ttwob.innerHTML = teamtwob
}
