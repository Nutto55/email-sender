import { Elysia } from "elysia"
import { email } from "./modules/email"
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
.use(swagger())
  .get("/", () => "Hello Elysia")
  .use(email)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
