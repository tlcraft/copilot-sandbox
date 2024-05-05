import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { CardValue } from '../enums/card-value.enum';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  public cards: Card[] = [];

  constructor() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = [CardValue.Two, CardValue.Three, CardValue.Four, CardValue.Five, CardValue.Six, CardValue.Seven, CardValue.Eight, CardValue.Nine, CardValue.Ten, CardValue.Jack, CardValue.Queen, CardValue.King, CardValue.Ace];
    for (let suit of suits) {
      for (let value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
}

  deal() {
    return this.cards.pop();
  }
}
