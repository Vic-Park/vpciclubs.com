import 'dotenv/config';
import 'tsconfig-paths/register';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import fastify from 'fastify';
import fastifyAutoload from 'fastify-autoload';
import fastifyCors from 'fastify-cors';
import fastifyRateLimit from 'fastify-rate-limit';
import path from 'path';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Toronto');

const app = fastify({
	logger: true,
});

app.register(fastifyCors);
// Registering a rate limit plugin for fastify to prevent brute-force attacks against the secret.
app.register(fastifyRateLimit, {
	// Maximum 3 requests within 5 seconds
	max: 3,
	timeWindow: 5000,
});

// Load all routes
app.register(fastifyAutoload, {
	dir: path.join(__dirname, 'routes'),
	dirNameRoutePrefix: false,
});

const port = process.env.PORT || 4000;
app.listen(port, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err);
	}
	console.info(`Server listening on ${address}`);
});
