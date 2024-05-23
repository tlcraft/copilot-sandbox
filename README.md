# Copilot Sandbox

I'm playing around with the GitHub Copilot extension and seeing what all it can do. The code here will be written using that tool. I'll work to build the card game War.

- [GitHub Copilot](https://github.com/features/copilot)
- [Getting Started](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)

## Key Features

* The VS Code extension gives you a new Chat tab to interact with Copilot
* You can highlight code, right-click and select Copilot to Explain This which describes the code and gives some insight on how it works

## Notes from the process

I asked Copilot how to create a TypeScript project and it explained I could create a `package.json` file using `npm init -y` to start with.

The `-y` flag skips questions by setting values to their default.
- [Source](https://docs.npmjs.com/cli/v6/commands/npm-init)

I asked about making a `main.ts` file udner a `src` folder and was suggested this command: `mkdir -p src && touch src/main.ts`

What does the `p` flag do?

```
The -p flag in the mkdir command stands for "parents". It allows the creation of nested directories in a single command, and it won't return an error if the directories already exist.

For example, if you run mkdir -p src/main, it will create both the src and src/main directories if they don't already exist. Without the -p flag, this command would fail if the src directory didn't already exist.
```

- [Source](https://man7.org/linux/man-pages/man1/mkdir.1.html)

I decided to ask Copilot how to build a card game. It suggested some starter classes for a Card and Deck so I'll add those to the repo.

When asked how we could create the game War using the Deck and Card classes it suggested in an Angular app it showed me an example of wrapping those in the `Injectable` decorator. It didn't provide much insight on the game rules and loop at this point.

It did pointed out these steps:

```
Create Angular Project: Use Angular CLI to create a new project.

Create Card and Deck Services: Create Angular services for Card and Deck. These services will contain the logic for creating cards and decks, shuffling, and dealing.

Create Game Service: Create a Game service that uses the Deck service to control the game flow. This includes dealing cards to players, comparing cards, and determining the winner.

Create Components: Create Angular components for displaying the game. This could include components for the game board, player hands, and the deck.

Connect Components and Services: Use Angular's dependency injection to connect your components and services. The components will use the services to get data and perform actions.
```

Here are the high-level steps it outlined when I asked how to create a new Angular project.

- `npm install -g @angular/cli`
- `ng new my-app`
- `ng my-app`
- `ng serve`

I asked Copilot to implement the shuffle method and I used its suggestion. It explained "the shuffle method can be implemented using the Fisher-Yates (also known as Knuth) shuffle algorithm. This algorithm works by iterating through the array from the last element to the first, swapping each element with an element at a random index below it.".

When asked to create a game service to play the game it responded with the following code which needed some additional adjustments.

```typescript
import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private player1Deck: DeckService;
  private player2Deck: DeckService;

  constructor(private deckService: DeckService) {
    this.startGame();
  }

  startGame() {
    this.deckService.shuffle();
    this.player1Deck = new DeckService();
    this.player2Deck = new DeckService();

    while (this.deckService.cards.length) {
      this.player1Deck.cards.push(this.deckService.deal());
      this.player2Deck.cards.push(this.deckService.deal());
    }
  }

  playRound() {
    const player1Card = this.player1Deck.deal();
    const player2Card = this.player2Deck.deal();

    if (player1Card.value > player2Card.value) {
      this.player1Deck.cards.unshift(player1Card, player2Card);
    } else if (player2Card.value > player1Card.value) {
      this.player2Deck.cards.unshift(player2Card, player1Card);
    } else {
      // It's war!
      // For simplicity, we'll just say the player who starts the war wins the war
      this.player1Deck.cards.unshift(player1Card, player2Card);
    }
  }

  checkGameOver() {
    return this.player1Deck.cards.length === 0 || this.player2Deck.cards.length === 0;
  }
}
```

I made the descision to update the CardService and make it a model instead. I also connected parts of the game service to the UI myself where I updated the `playRound` method to return the drawn cards for display and updated the code to handle null checks.

At this point I'll circle back to asking Copilot for insight on the last steps, such as creating a method to return who has won the game.

I asked Copilot to explain the `playRound` method (by highlighting the method name alone in the game service) and it described its original implementation and didn't take into account the changes I made to it locally. But after highlighting the contexts of the method and asking again it was able to describe my changes.

I asked it to create tests for the Game Service and while it generated several tests it missed mocking out dependencies. It didn't understand that the player fields were private so they were inacessible. I'm working through updating the file so it'll run propertly.

I asked for a method to return the winner of the game which I used. And then I manually integrated that with the UI.

In the end I asked how to update the game logic to better handle the rules of War. I used the example to update the rules where players add duplicates to a pile until a winner is declared. Then I manually updated some items, like displaying the suit icon on the cards and fixed some styling. I also updated the UI with some messaging.
