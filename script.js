let cod = "";

function calcola(){
    let cognome = document.getElementById("cognome").value.toUpperCase();
    let nome = document.getElementById("nome").value.toUpperCase();
    let luogo = document.getElementById("luogo").value.toUpperCase();
    let data = document.getElementById("data").value.split("-");
    let sesso = document.getElementById("sesso").value;
    /*
    let cognome = "BALAN";
    let nome = "ANTONIO FLORIN";
    let luogo = "VICENZA";
    let data = ["2007","09","21"];
    let sesso = "M";*/

    let fin = document.getElementById("risultato");
    let ris = "";
    if(cognome && nome && luogo && data && sesso && valido(cognome) && valido(nome) && valido(luogo) && cod.indexOf(luogo)!=-1){
        ris = c_cognome(cognome) + c_nome(nome) + c_anno(data[0]) + c_mese(data[1]) + c_giorno(data[2],sesso) + c_codici(cod,luogo);
        ris += controllo(ris);
        fin.innerHTML = ris;
    }else{
        alert("Inserire dei dati validi");
        return;
    }
    //BLNNNF07P21L840N
    
    
    //console.log(c_codici(cod,'\nVICENZA'));
}

function consonante(ind,str){
    let quant = ind;
    let i = 0
    while(i<str.length){
        if(str[i]!="A" && str[i]!="E" && str[i]!="I" && str[i]!="O" && str[i]!="U" && str[i]!=" "){
            quant-=1;
        }
        i++;
        if(quant==0) { return str[i-1]; }
    }
    return -1;
}

function conta_consonanti(str){
    let n = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]!="A" && str[i]!="E" && str[i]!="I" && str[i]!="O" && str[i]!="U" && str[i]!=" "){
            n++;
        }
    }
    return n;
}

function vocale(ind,str){
    let quant = ind;
    let i = 0
    while(i<str.length){
        if(str[i]=="A" || str[i]=="E" || str[i]=="I" || str[i]=="O" || str[i]=="U"){
            quant-=1;
        }
        i++;
        if(quant==0) { return str[i-1]; }
    }
    return -1;
}

function c_cognome(cognome){
    let c1 = consonante(1,cognome);
    let c2 = consonante(2,cognome);
    let c3 = consonante(3,cognome);
    let r_cognome = "";

    r_cognome+=c1;
    if(c2!=-1){
        r_cognome+=c2;
        if(c3!=-1){
            r_cognome+=c3
        }else{
            if(vocale(1,cognome)!=-1){
                r_cognome += vocale(1,cognome);
            }else{
                r_cognome += "X"
            }
        }
    }else{
        r_cognome += vocale(1,cognome);
        if(vocale(2,cognome)==-1){
            r_cognome+="X";
        }else{
            r_cognome+=vocale(2,cognome);
        }
    }
    return r_cognome;
}

function c_nome(nome){
    if(conta_consonanti(nome)>3){
        return consonante(1,nome) + consonante(3,nome) + consonante(4,nome)
    }
    let c1 = consonante(1,nome);
    let c2 = consonante(2,nome);
    let c3 = consonante(3,nome);
    let r_nome = "";

    r_nome+=c1;
    if(c2!=-1){
        r_nome+=c2;
        if(c3!=-1){
            r_nome+=c3
        }else{
            if(vocale(1,nome)!=-1){
                r_nome += vocale(1,nome);
            }else{
                r_nome += "X"
            }
        }
    }else{
        r_nome += vocale(1,nome);
        if(vocale(2,nome)==-1){
            r_nome+="X";
        }else{
            r_nome+=vocale(2,nome);
        }
    }
    return r_nome;
}

function c_anno(anno){ //data indicata in questo modo come stringa: anno-mese-giorno
    return anno[2] + anno[3];
}

function c_mese(mese){
    let mesi = ["A","B","C","D","E","H","L","M","P","R","S","T"];
    return mesi[parseInt(mese)-1];
}

function c_giorno(giorno,sesso){
    if(sesso=="F"){
        return parseInt(giorno) + 40;
    }
    return giorno;
}

function prendi_codice(codice){
    let reader = new FileReader();
    reader.readAsText(codice.files[0]);

    reader.onload = function(){
        cod = reader.result;
        //console.log(cod);
    }

}

function c_codici(tutto,inp){
    let dove = tutto.indexOf("\n" + inp);
    return tutto.slice(dove+inp.length+2,dove+inp.length+6)
}

function controllo(str){
    let alf = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let tabella_d = [1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23];
    let somma = 0;

    for(let i = 0;i<15;i++){
        if(i%2==1){
            if(isNaN(parseInt(str[i]))){
                somma+=alf.indexOf(str[i]);
            }
            else{
                somma+=parseInt(str[i]);
            }
        }else{
            if(isNaN(parseInt(str[i]))){
                somma+=tabella_d[alf.indexOf(str[i])];
            }
            else{
                somma+=tabella_d[parseInt(str[i])];
            }
        }
    }

    return alf[somma%26];
    
}

function valido(str){
    val = true
    for(let i = 0; i<str.length;i++){
        if(!isNaN(parseInt(str[i]))){
            val = false;
        }
    }
    return val;
}