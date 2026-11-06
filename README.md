# Elysia with Bun runtime

For email sender using SMTP service

## Tech stacks

- Elysia
- Typescript
- [Mailpit](https://mailpit.axllent.org/docs/install/)
- Other email provider e.g. [Resend](https://resend.com/docs/introduction)

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Sending email locally

Without SMTP config the mailer only logs each email. To actually send, run [Mailpit](https://mailpit.axllent.org), a local SMTP catcher (nothing leaves your machine):

```bash
brew install mailpithttps://resend.com/docs/introduction
brew services start mailpit   # background service, restarts at login
```

Caught mail shows at [http://localhost:8025](http://localhost:8025).

Stop it with

```bash
brew services stop mailpit
```
