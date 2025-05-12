import { OpenAPIHono } from '@hono/zod-openapi'
// import { logger } from 'hono/logger'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from './middlewares/pino-loggers.js'



const app = new OpenAPIHono()

app.use(pinoLogger()) 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/error", (c) => {
    c.status(500);
    c.var.logger.info('This is an error');
    throw new Error("Fix me as fast as possible");
});

app.notFound(notFound);
app.onError(onError);

export default app;