console.log("Rendezvénykezelő alkalmazás elindítva!");
// src/rendezvenykezelo.ts
import { Event } from './rendezveny'; // Importáljuk az Event osztályt

export class EventManager {
    private events: Event[] = []; // Rendezvények listája

    // Rendezvény létrehozása
    createEvent(name: string, location: string, date: Date, type: string): Event {
        const newEvent = new Event(name, location, date, [], type);
        this.events.push(newEvent);
        console.log(`Rendezvény létrehozva: ${name}`);
        return newEvent;
    }

    // Rendezvény törlése
    deleteEvent(name: string): void {
        this.events = this.events.filter(event => event.name !== name);
        console.log(`Rendezvény törölve: ${name}`);
    }

    // Rendezvények listázása
    listEvents(): void {
        console.log("Rendezvények listája:");
        this.events.forEach(event => {
            console.log(event.getDetails());
        });
    }

    // Rendezvény keresése név alapján
    findEvent(name: string): Event | undefined {
        return this.events.find(event => event.name === name);
    }
}
