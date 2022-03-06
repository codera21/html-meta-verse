import Fastify from 'fastify';
import indexRoute from './routes/home';

const fastify = Fastify({
  logger: process.env.MODE == 'prd' ? false : true,
});

fastify.register(indexRoute);

export default fastify;
