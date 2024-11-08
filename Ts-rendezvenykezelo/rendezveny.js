"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
// src/rendezveny.ts
var Event = /** @class */ (function () {
    function Event(name, // Rendezvény neve
    location, // Helyszín
    date, // Dátum
    participants, // Résztvevők listája
    type // Rendezvény típusa
    ) {
        if (participants === void 0) { participants = []; }
        this.name = name;
        this.location = location;
        this.date = date;
        this.participants = participants;
        this.type = type;
    }
    // Résztvevő hozzáadása
    Event.prototype.addParticipant = function (participant) {
        this.participants.push(participant);
        console.log("".concat(participant, " hozz\u00E1adva a(z) ").concat(this.name, " rendezv\u00E9nyhez."));
    };
    // Résztvevő eltávolítása
    Event.prototype.removeParticipant = function (participant) {
        this.participants = this.participants.filter(function (p) { return p !== participant; });
        console.log("".concat(participant, " elt\u00E1vol\u00EDtva a(z) ").concat(this.name, " rendezv\u00E9nyr\u0151l."));
    };
    // Rendezvény adatai
    Event.prototype.getDetails = function () {
        return "Rendezv\u00E9ny: ".concat(this.name, ", Helysz\u00EDn: ").concat(this.location, ", D\u00E1tum: ").concat(this.date.toDateString(), ", T\u00EDpus: ").concat(this.type, ", R\u00E9sztvev\u0151k: ").concat(this.participants.join(", "));
    };
    return Event;
}());
exports.Event = Event;
