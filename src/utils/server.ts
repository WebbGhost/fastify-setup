import fastify from "fastify";
import { logger } from "./logger";

export const buildServer = async () => {
	const app = fastify({
		logger,
	});
	return app;
};
