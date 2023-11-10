const oggettoInHtml = (obj) => {

    const ul = document.createElement('ul');

    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i ++) {

        const entry = entries[i];

        const key = entry[0];

        const value = entry[1];

        const li = document.createElement('li');

        li.innerHTML = `${key}: ${value}`;

        ul.appendChild(li);
    }

    return ul;
}

window.addEventListener ('load', () => {

    const bottone = document.getElementById('bottoneInvio');

    let p = document.createElement('p');

    bottone.addEventListener ('click', () => {

        p.innerHTML = '';

        const input = (document.getElementById('testoUtente'));

        const listaAnalisi = oggettoInHtml(analizzaTesto(input.value)); //funzione analizzaTesto richiamata da main1.js

        p.appendChild(listaAnalisi);

        document.body.appendChild(p);

        input.value = '';
    })
})



