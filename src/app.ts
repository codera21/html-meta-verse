#!/usr/bin/env node
import Fastify from 'fastify';
import indexRoute from './routes/home';

const fastify = Fastify({
  logger: true,
});

fastify.register(indexRoute);

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
