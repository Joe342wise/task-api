import { logger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

export function pinoLogger() {
    return logger({
        pino: pino.default(process.env.NODE_ENV === "production" ? undefined: pretty()),
        http: {
            reqId: () => crypto.randomUUID(),
        }
    });
}
