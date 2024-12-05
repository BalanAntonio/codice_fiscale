function calcola(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let luogo = document.getElementById("luogo").value;
    let provincia = document.getElementById("provincia").value;
    let data = document.getElementById("data").value;
    
    console.log(conta_consonanti("aeikksak"));
}

function consonante(ind,str){
    let quant = ind;
    let i = 0
    while(i<str.length){
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
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
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
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

