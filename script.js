function calcola(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let luogo = document.getElementById("luogo").value;
    let provincia = document.getElementById("provincia").value;
    let giorno = document.getElementById("giorno").value;
    let mese = document.getElementById("mese").value;
    let anno = document.getElementById("anno").value;
    
    console.log(consonante(4,"qeswr"));
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
    /*for(i; i <= str.length && quant != ind; i++){
        if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
            quant += 1
        }
    }
        
    
    while(quant>0){
        if(str[i-1]!="a" && str[i-1]!="e" && str[i-1]!="i" && str[i-1]!="o" && str[i-1]!="u" && i<str.length){
            quant -= 1;
            i+=1;
        }else{
            break;
        }
    */
    //return str[i];
}