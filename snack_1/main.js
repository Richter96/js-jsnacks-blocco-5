/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 
*/

// creo un array di 1o oggetti

const zucchine = [
    {
        varietà: 'tonda',
        lunghezza: 10,
        peso: 0.1
    },
    {
        varietà: 'trombetta',
        lunghezza: 10,
        peso: 0.5
    },
    {
        varietà: 'napoletana',
        lunghezza: 10,
        peso: 0.3
    },
    {
        varietà: 'tonda',
        lunghezza: 10,
        peso: 0.4
    },
    {
        varietà: 'trombetta',
        lunghezza: 10,
        peso: 0.2
    }
]

// calcoliamo quanto pesano tutte le zucchine

let sumZucchine = 0

// creo un ciclo per prendere elementi elementi dall'arrey
zucchine.forEach(element => {
    // destrutturo element per prendere solo alcune proprietà di ogni oggetto zucchine
    const {peso} = element
    console.log(peso)
 // faccio la somma delle proprietà 
    sumZucchine += peso
});

console.log(sumZucchine)