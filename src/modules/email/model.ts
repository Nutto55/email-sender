import { t } from 'elysia'

export namespace EmailModel {
  export const sendBody = t.Object({
    to: t.String({ format: 'email' }),
    subject: t.String(),
    message: t.MaybeEmpty(t.String()),
  })
  export type SendBody = typeof sendBody.static

  export type WelcomeProps = Pick<SendBody, 'message'>

  export const sendResponse = t.Object({ id: t.String() })
}
