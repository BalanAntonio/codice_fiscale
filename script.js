function calcola(){
    let cognome = document.getElementById("cognome").value.toUpperCase();
    let nome = document.getElementById("nome").value.toUpperCase();
    let luogo = document.getElementById("luogo").value.toUpperCase();
    let provincia = document.getElementById("provincia").value.toUpperCase();
    let data = document.getElementById("data").value.split("-");
    let sesso = document.getElementById("sesso").value;
    
    console.log( c_cognome(cognome) + c_nome(nome) + c_anno(data[0]) + c_mese(data[1]) + c_giorno(data[2],sesso) );
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