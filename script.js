let tiri = prompt("Quanti tiri vuoi fare?");
let player1 = 0
let player2 = 0

function gioco (tiri) {
    for (let i = 0; i < tiri; i++) {
        let tiro1 = Math.floor(Math.random() * 6) + 1;
        player1 += tiro1;
        let tiro2 = Math.floor(Math.random() * 6) + 1;
        player2 += tiro2;}
        if (player1 > player2) {
            console.log("Ha vinto il giocatore 1 con " + player1 + " punti!");
        } else if (player2 > player1) {
            console.log("Ha vinto il giocatore 2 con " + player2 + " punti!");
        } else {
            console.log("Pareggio! Entrambi i giocatori hanno " + player1 + " punti!");
        }
    }

gioco(tiri);