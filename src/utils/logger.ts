import pino from "pino";

export const logger = pino({
	redact:["DATABASE_CONNECTION"],
	level:"debug"||"error"||"info"||"warn",
	transport: {
		target: "pino-pretty",
	},
});
