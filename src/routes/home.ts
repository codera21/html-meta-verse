import { FastifyReply, FastifyRequest } from 'fastify';
import metaTags from '../lib/metaTags';

export default async function routes(fastify, _options) {
  fastify.get('/', async (request: FastifyRequest, _reply: FastifyReply) => {
    let url: string = request.query['url'];

    return await metaTags.getMetaTags(url);
  });
}
