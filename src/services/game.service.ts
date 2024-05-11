import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { Card } from '../classes/card';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    private player1Deck: Card[] = [];
    private player2Deck: Card[] = [];

    constructor(private deckService: DeckService) {
        this.startGame();
    }

    startGame() {
        this.deckService.shuffle();

        while (this.deckService.cards.length) {
            let nextCard = this.deckService.deal();
            if (nextCard) {
                this.player1Deck.push(nextCard);
            }

            nextCard = this.deckService.deal();
            if (nextCard) {
                this.player2Deck.push(nextCard);
            }
        }
    }

    playRound() {
        let player1Card = this.player1Deck.pop();
        let player2Card = this.player2Deck.pop();
        let player1Wins  = false;

        if (player1Card && player2Card) {

            const pile: Card[] = [];
            while (player1Card && player2Card && player1Card.value === player2Card.value) {
                // This is a war
                pile.push(player1Card, player2Card); // face-down cards
                player1Card = this.player1Deck.pop();
                player2Card = this.player2Deck.pop();
            }

            if (player1Card && player2Card) {
                if (player1Card.value > player2Card.value) {
                    this.player1Deck.unshift(player1Card, player2Card, ...pile);
                    player1Wins = true;
                } else if (player2Card.value > player1Card.value) {
                    this.player2Deck.unshift(player2Card, player1Card, ...pile);
                    player1Wins = false;
                }
            }
        }

        return { player1Card, player2Card, player1Wins };
    }

    /**
     * Checks if the game is over by determining if either player's deck is empty.
     * @returns {boolean} True if the game is over, false otherwise.
     */
    checkGameOver() {
        return this.player1Deck.length === 0 || this.player2Deck.length === 0;
    }

    getWinner() {
        if (this.player1Deck.length === 0) {
            return 'Player 2 wins!';
        } else if (this.player2Deck.length === 0) {
            return 'Player 1 wins!';
        } else {
            return 'The game is not over yet.';
        }
    }
}
