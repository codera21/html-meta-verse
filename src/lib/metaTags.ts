import axios from 'axios';
import cheerio from 'cheerio';

// import minimist from 'minimist';

async function getMetaTags(url: string) {
  // goto the url
  const res = await axios.get(url);

  let $ = cheerio.load(res.data);

  const meta = $('meta');

  let output: Array<{ key: string; val: string }> = new Array();

  for (let i = 0; i < meta.length; i++) {
    const val = meta.eq(i).attr('content');
    let key: string | undefined = meta.eq(i).attr('name');

    if (key == undefined) {
      key = meta.eq(i).attr('property');
    }
    if (key && val) {
      output.push({ key: key, val: val });
    }
  }
  return output;
}

export default {
  getMetaTags,
};
