/* 
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" 
*/

const nomi = [
    'clsudio',
    'giuseppe',
    'riccardo'
]

function myfunction(...parametri) {
    console.log(parametri)
}



myfunction([ nomi ], 2, nomi.length)