// src/index.ts
import { EventManager } from './rendezvenykezelo';
import { Participant } from './Participant';

const eventManager = new EventManager();

// Rendezvény létrehozása
const event1 = eventManager.createEvent("az ötszázadik táncdalfesztivál Korda Györggyel", "Budapest", new Date("2024-08-15"), "Fesztivál");
event1.addParticipant("Piá Zoltán");

// Rendezvények listázása
eventManager.listEvents();

// Rendezvény törlése
eventManager.deleteEvent("az ötszázadik táncdalfesztivál Korda Györggyel");
eventManager.listEvents();
