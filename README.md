# Love supper

## Description

A fun project to keep track of my recipes and share them with others. I learned a lot about Sveltekit and Drizzle along the way.

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

1. Get an account with [Neon](https://neon.tech/)
2. Set up a project and a database there. You will get a database URL out of it for your project.
3. Set up a GitHub OAuth app with https://localhost/ as your homepage and https://localhost/login/github/callback as the callback url. You will get the Github client secret and ID to use in the project.
4. Clone this repository to your local environment.
5. Install the packages.

```bash
npm install
```

6. In the repository you will find a .env.example file. Copy it and/or rename it to .env and put in the database URL from Neon and the client and ID from GitHub.
7. Now to generate the database schema and tables.

```bash
npm run db:generate && npm run db:push
```

8. To test out that run

```bash
npm run db:studio
```

or to view the frontend

```bash
npm run dev
```

## Usage

### To run development environment

```bash
npm run dev
```
### Build it

```bash
npm run build
```

### To run through the tests

```bash
npm run test
```

### Push database schema to Neon

```bash
npm run db:push
```

### View and interact with the database through GUI.

```bash
npm run db:studio
```

### Generate migrations.

```bash
npm run db:generate
```

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## License

MIT License

---

## Features

- [ ] Add your own recipes
- [ ] Share them with unique links.
- [ ] Favorite recipes to create your own list of love.
