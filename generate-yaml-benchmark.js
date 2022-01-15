'use strict';

const yaml = require('yaml');
const lolSize = 10;
const dodgyOptions = {maxAliasCount: -1};

let yamlString = 'lol0: &lol0 "lol"\n';

console.log('"# Lolz","YAML Length","Expanded Length"');
for (let numLolz = 1; numLolz <= 10; ++numLolz) {
  const lolString = `lol${numLolz}: &lol${numLolz} [${new Array(lolSize).fill('*lol' + (numLolz - 1)).join(',')}]\n`;
  yamlString += lolString;
  const parsedYaml = JSON.stringify(yaml.parse(yamlString, dodgyOptions));
  console.log(`${numLolz},${yamlString.length},${parsedYaml.length}`);
}
