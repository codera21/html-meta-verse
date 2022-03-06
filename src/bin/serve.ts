#!/usr/bin/env node
import fastify from '../app';

const port = 3000;
const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export default start();
