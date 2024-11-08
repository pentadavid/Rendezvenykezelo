"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var rendezvenykezelo_1 = require("./rendezvenykezelo");
var eventManager = new rendezvenykezelo_1.EventManager();
// Rendezvény létrehozása
var event1 = eventManager.createEvent("az ötszázadik táncdalfesztivál Korda Györggyel", "Budapest", new Date("2024-08-15"), "Fesztivál");
event1.addParticipant("Piá Zoltán");
// Rendezvények listázása
eventManager.listEvents();
// Rendezvény törlése
eventManager.deleteEvent("az ötszázadik táncdalfesztivál Korda Györggyel");
eventManager.listEvents();
