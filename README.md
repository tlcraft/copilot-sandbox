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
