import { Elysia } from 'elysia'
import { EmailService } from './service'
import { EmailModel } from './model'

export const email = new Elysia({ prefix: '/email' })
  .post('/send', ({ body }) => EmailService.send(body), {
    body: EmailModel.sendBody,
    response: EmailModel.sendResponse,
  })
