const analizzaTesto = (stringa) => {

    const invertiStringa = (str) => {

        let strInv = '';

        for (let i = str.length - 1; i >= 0; i --){  

            strInv += str[i];
           }

           return strInv;
    }

    const analisi = {

        originale: stringa,

        minuscolo: stringa.toLowerCase(),

        senzaSpazi: stringa.trim(),

        numeroCaratteri: stringa.length,

        contineJS: stringa.includes('JS') || stringa.includes('JavaScript'),

        invertita: invertiStringa(stringa),
    }

    return analisi;
}

// console.log(analizzaTesto('  Ho studiato JavaScript  '));


