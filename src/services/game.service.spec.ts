import { TestBed } from '@angular/core/testing';
import { Card } from '../classes/card';
import { GameService } from './game.service';
import { DeckService } from './deck.service';

class MockDeckService {
  constructor(public cards: Card[]) { }
  deal = () => this.cards.pop();
  shuffle = () => jasmine.createSpy();
}

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    const mockDeckService = new MockDeckService([new Card('Hearts', 'A'), new Card('Hearts', '2')]);
    TestBed.configureTestingModule({
      providers: [{ provide: DeckService, useValue: mockDeckService }],
    });
    service = TestBed.inject(GameService);
    service.startGame();
  });

  it('should check if the game is over when player2Deck is empty', () => {
    service.playRound();
    const result = service.checkGameOver();
    expect(result).toBe(true);
  });

  it('should check if the game is not over when both player1Deck and player2Deck are not empty', () => {
    const result = service.checkGameOver();
    expect(result).toBe(false);
  });
});
