import fetch from "node-fetch";
import cheerio from "cheerio";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
console.log(args);

// input url: this should come from cli 
// const input_url = 'https://www.sastodeal.com/fumo-classic-faux-leather-bean-bag-xxxl-black-with-beans-fumo-sd-gg-002.html';

const inputUrl: string = args['url'];

if (!inputUrl) {
    console.log("Please enter url")
    process.exit();
}

const res = await fetch(inputUrl);
// console.log(await res.text());
const $ = cheerio.load(await res.text());

const meta = $('meta');

const output = {};
for (let i: number = 0; i < meta.length; i++) {
    try {

        const val = meta.eq(i).attr('content');
        let key = meta.eq(i).attr('name');
        if (key === undefined) {
            key = meta.eq(i).attr('property');
        }

        if (key) {
            output[key] = val;
        }



    } catch (err) {
        console.log('content or name not out in meta tag');
    }
}

console.log(output);




// fetch(input_url).then(async res => {
//     const $ = cheerio.load(await res.text());
// }).catch(() => {
//     console.log("ooops !!");
// });









