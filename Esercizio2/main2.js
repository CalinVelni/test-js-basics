const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo) => {

    const array = [];

    for (let i = 0; i < numeroElementi; i ++) {

        const nCasuale = Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo;

        array[i] = nCasuale;
    }

    return array;
}

const contaPariDispari = (array) => {

    let nP = 0;

    let nD = 0;

    for (let i = 0; i < array.length; i ++) {

        const n = array[i];

        if (n % 2 === 0) {

            nP ++;
        }

        else {

            nD ++;
        }
    }

    const conteggio = {

        pari: nP,

        dispari: nD,
    };

    return conteggio;
}

const arrayProva = riempiArray(10, 25, 100);

const contProva = contaPariDispari(arrayProva);

console.log(arrayProva, contProva);