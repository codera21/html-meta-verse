import { FastifyReply, FastifyRequest } from 'fastify';
import metaTags from '../lib/metaTags';

export default async function routes(fastify, _options) {
  fastify.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
    let url: string =
      'https://www.sastodeal.com/fumo-classic-faux-leather-bean-bag-xxxl-black-with-beans-fumo-sd-gg-002.html';

    return await metaTags.getMetaTags(url);
  });
}
