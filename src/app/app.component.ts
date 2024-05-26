import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from '../services/game.service';
import { Card } from '../classes/card';
import { CommonModule } from '@angular/common';
import { CardValue } from '../enums/card-value.enum';
import { CardSuit } from '../enums/card-suite.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'card-game';

  player1Card: Card = new Card('', CardValue.None);
  player2Card: Card = new Card('', CardValue.None);
  player1Wins: boolean = false;
  winner: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.startGame();
    this.playRound();
  }

  /**
   * Plays a round of the game.
   * If the game is not over, it retrieves the cards played in the round and updates the player's cards and wins.
   * Finally, it checks if the game is over and sets the winner accordingly.
   */
  playRound() {
    if(!this.gameService.checkGameOver()) {
      const { player1Card, player2Card, player1Wins } = this.gameService.playRound();
      if ( player1Card && player2Card) {
        this.player1Card = player1Card;
        this.player2Card = player2Card;
      }

      this.player1Wins = player1Wins;
    }

    this.winner = this.gameService.checkGameOver() ? this.gameService.getWinner() : '';
  }

  getCardValueName(value: CardValue): string {
    if (value < 11) {
        return value.toString();
    } else {
        return CardValue[value].substring(0, 1);
    }
  }

  getPlayer1CardCount(): number {
    return this.gameService.getPlayer1CardCount();
  }

  getPlayer2CardCount(): number {
    return this.gameService.getPlayer2CardCount();
  }

  getSuitIcon(suit: string): string {
    switch(suit) {
      case CardSuit.Clubs:
        return '♣';
      case CardSuit.Diamonds: 
        return '♦';
      case CardSuit.Hearts:
        return '♥';
      case CardSuit.Spades:
        return '♠';
      default:
        return '';
    }
  }
}
