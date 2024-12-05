function calcola(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let luogo = document.getElementById("luogo").value;
    let provincia = document.getElementById("provincia").value;
    let data = document.getElementById("data").value;
    
    console.log(c_nome("antonio florin"));
}

function consonante(ind,str){
    let quant = ind;
    let i = 0
    while(i<str.length){
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u" && str[i]!=" "){
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
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u" && str[i]!=" "){
            n++;
        }
    }
    return n;
}

function vocale(ind,str){
    let quant = ind;
    let i = 0
    while(i<str.length){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
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
            if(vocale(3,cognome)!=-1){
                r_cognome += vocale(3,cognome);
            }else{
                r_cognome += "X"
            }
        }
    }else{
        r_cognome += vocale(2,cognome);
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
            if(vocale(3,nome)!=-1){
                r_nome += vocale(3,nome);
            }else{
                r_nome += "X"
            }
        }
    }else{
        r_nome += vocale(2,nome);
    }
    return r_nome;
}

