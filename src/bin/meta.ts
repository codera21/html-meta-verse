#!/usr/bin/env node
import * as minimist from 'minimist';
import metaTags from '../lib/metaTags';
import * as fs from 'fs';

async function main() {
  const args = minimist(process.argv.slice(2));

  const url: string = args['url'];

  const res: Array<{ key: string; val: string }> = await metaTags.getMetaTags(
    url
  );

  if (args['o']) {
    const filePath: string = args['o'];
    saveToFile(res, filePath);
  } else {
    console.log(res);
  }
}

function saveToFile(
  res: Array<{ key: string; val: string }>,
  filePath: string
) {
  const jsonResponse: string = JSON.stringify(res);

  fs.writeFileSync(filePath, jsonResponse);
  console.log('File saved to ' + filePath);
}

(async () => await main())();
