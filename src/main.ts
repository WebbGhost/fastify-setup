import { config } from "./config/config";
import { buildServer } from "./utils/server";
import { logger } from "./utils/logger";


const graceFullShutdown = async ({
	app,
}: {
	app: Awaited<ReturnType<typeof buildServer>>;
}) => {
	await app.close();
};

const main = async () => {
	const app = await buildServer();
	await app.listen({
		port: config.PORT,
		host: config.HOST
	});
	logger.debug(config)
	const signals = ["SIGINT", "SIGTERM"];

	for (const signal of signals) {
		process.on(signal, () => {
			logger.info(`Signal got ${signal}`);
			graceFullShutdown({
				app,
			});
		});
	}
};

main();
