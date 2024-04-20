import { Card } from "./card";

export class Deck {
    public cards: Card[] = [];

    constructor() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        // Implement shuffle logic here
    }

    deal() {
        // Implement deal logic here
    }
}
