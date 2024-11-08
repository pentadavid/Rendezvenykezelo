console.log("Rendezvénykezelő alkalmazás elindítva!");

// src/rendezveny.ts
export class Event {
    constructor(
        public name: string,            // Rendezvény neve
        public location: string,        // Helyszín
        public date: Date,              // Dátum
        public participants: string[] = [], // Résztvevők listája
        public type: string             // Rendezvény típusa
    ) { }

    // Résztvevő hozzáadása
    addParticipant(participant: string): void {
        this.participants.push(participant);
        console.log(`${participant} hozzáadva a(z) ${this.name} rendezvényhez.`);
    }

    // Résztvevő eltávolítása
    removeParticipant(participant: string): void {
        this.participants = this.participants.filter(p => p !== participant);
        console.log(`${participant} eltávolítva a(z) ${this.name} rendezvényről.`);
    }

    // Rendezvény adatai
    getDetails(): string {
        return `Rendezvény: ${this.name}, Helyszín: ${this.location}, Dátum: ${this.date.toDateString()}, Típus: ${this.type}, Résztvevők: ${this.participants.join(", ")}`;
    }
}
