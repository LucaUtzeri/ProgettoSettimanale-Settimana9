// Layout sito servizi 2 Progettare una interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
// Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza è definita come number carica, e rappresenta il quantitativo di euro disponibile per le chiamate.
// La seconda variabile d'istanza è definita come number numeroChiamate, e rappresenta il numero di chiamate effettuate con il cellulare.
// La classi FirstUser-SecondUser-ThirdUser deve dichiarare nell'interfaccia e implementare nelle classi i seguenti metodi:
// - un metodo definito come public void ricarica(double unaRicarica), che ricarica il telefonino.
// - Un metodo definito come public void chiamata(double minutiDurata), che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
// -- Tale metodo dovrà aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino.
// - Si assuma un costo di 0.20 euro per ogni minuto di chiamata,un metodo public number numero404(), che restituisce il valore della carica disponibile.
// - Un metodo public number getNumeroChiamate(), che restituisce il valore della variabile d'istanza numeroChiamate.
// - Infine, un metodo public void azzeraChiamate(), che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
// Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.

interface Smartphone {

    ricarica: number;
    numeroChiamate: number;

}

class User implements Smartphone {

    ricarica: number;
    numeroChiamate: number;

    constructor(
        _ricarica: number,
        _numeroChiamate: number,

    ) {
        this.ricarica = _ricarica;
        this.numeroChiamate = _numeroChiamate;

    }

    unaRicarica(x: number): void {
        this.ricarica = this.ricarica + x;
    } // valore carica 

    minutiDurata(minutes: number): void {
        this.ricarica = this.ricarica - (minutes * 0.20);
        this.numeroChiamate += 1
    } // Durata della chiamata in minuti + numero totale delle chiamate

    numero404(): number {
        return this.ricarica
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }


}

console.log("Primo User");
let newUser1 = new User(0, 0);
newUser1.unaRicarica(60)
console.log(newUser1.ricarica);
newUser1.minutiDurata(5)
console.log(newUser1.numeroChiamate);
console.log(newUser1.numero404());
newUser1.minutiDurata(10)
console.log(newUser1.numeroChiamate);
console.log(newUser1.numero404());
newUser1.minutiDurata(9)
console.log(newUser1.numeroChiamate);
console.log(newUser1.numero404());
console.log("Secondo User");
let newUser2 = new User(0, 0);
newUser2.unaRicarica(30)
console.log(newUser2.ricarica);
newUser2.minutiDurata(40)
console.log(newUser2.numeroChiamate);
console.log(newUser2.numero404());
newUser2.minutiDurata(20)
console.log(newUser2.numeroChiamate);
console.log(newUser2.numero404());
console.log("Terzo User");
let newUser3 = new User(0, 0);
newUser3.unaRicarica(10)
console.log(newUser3.ricarica);
newUser3.minutiDurata(2)
console.log(newUser3.numeroChiamate);
console.log(newUser3.numero404());
newUser3.minutiDurata(5)
console.log(newUser3.numeroChiamate);
console.log(newUser3.numero404());
newUser3.minutiDurata(6)
console.log(newUser3.numeroChiamate);
console.log(newUser3.numero404());
newUser3.minutiDurata(2)
console.log(newUser3.numeroChiamate);
console.log(newUser3.numero404());
newUser3.minutiDurata(1)
console.log(newUser3.numeroChiamate);
console.log(newUser3.numero404());