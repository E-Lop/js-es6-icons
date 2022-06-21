/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona 
un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, 
sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */

// --------------------------------------
// ANALISI
// --------------------------------------

// inserisco struttura dati in un array (allIconsArray)

// creo funzione che genera un DIV per ciascun elemento di allIconsArray (il box con uno span che contiene il nome del singolo elemento thisIcon.name)
// creo una funzione che genera il nome di ogni singola icona concatenando (family, prefix e name)
// alla funzione do come argomento thisIcon

// uso un ciclo forEach che invoca le due funzioni per ciascun elemento dell'array

// creo delle classi CSS con i singoli colori delle icone, nel ciclo forEan aggiungo le classi appropriate a ciascuna icona generata

// creo il select in HTML e uso gli ID delle option per array.filter

// creo un addEventListener che 1) pulisce il container da tutti box, 2) invoca la funzione che crea i box dando come argomento il risultato di array.filter

// BONUS

// creo funzione per generazione casuale di colori con notazione esadecimale
// modifico il template HTML per includere la classe style="color:${thisIcon.color};"

// creo un array con i valori di allIconsArray.type
// creo un array che abbia elementi tutti i select
// uso la correlazione di array tramite indice per popolare dinamicamente i select (spero)
