# Campo minato
Genera 16 bombe nello stesso range di difficoltà prescelta, facendo si che non siano presenti più bombe nella stessa cella.

Se la bomba è presente nella casella cliccata l'utente ha perso.

La partita termina quando l'utente clicca su una bomba o quando ha cliccato tutte le caselle "libere".

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

---
## Procedimento 
- Creo una constante con il numero di bombe da generare.
- Creo una funzione di un estrattore random con range variabile. 
- Creo un ciclo che genera un N. di "bombe" e assegna ad ognuna un numero random che va da 0 fino al n. di celle totali presenti nel playground.
- Mi assicuro che nell'array delle bombe non ce ne siano due con le stesse "coordinate(che corrispondono al n.generato randomicamente)".
- Creo una funzione "endGame" cui all-interno sono presenti 2 condizioni:
---
1. La partita termina perchè l'utente ha "cliccato" una bomba.

Per fare questo controllo dobbiamo verificare che l'id della cella corrisponda al numero assegnato in modo randomico alla bomba generata.

---

2. la partita termina perchè l'utente ha totalizzato il numero massimo di punti.

Qui controlliamo che il tot.di celle generate meno il n.di bombe presenti, corrisponda al punteggio del giocatore.
per calcolare il punteggio del giocatore dobbiamo incrementare un counter ad ogni click di una cella, e disabilitare la stessa per evitare che cliccando più volte la stessa cella si totalizzi il punteggio necessario per vincere.

---

- disabilito con un overlay il campo di gioco nel caso in cui una delle due condizioni si verifichi.

