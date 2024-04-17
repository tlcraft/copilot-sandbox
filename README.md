# Copilot Sandbox

I'm playing around with the GitHub Copilot extension and seeing what all it can do. The code here will be written using that tool.

- [GitHub Copilot](https://github.com/features/copilot)

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
