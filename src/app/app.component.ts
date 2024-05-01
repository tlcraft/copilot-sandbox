import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from '../services/game.service';
import { Card } from '../classes/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'card-game';

  player1Card: Card = new Card('', '');
  player2Card: Card = new Card('', '');
  player1Wins: boolean = false;
  winner: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.startGame();
    this.playRound();
  }

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
}
