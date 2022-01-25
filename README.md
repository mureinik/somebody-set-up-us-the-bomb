# Somebody set up us the bomb

![Zero Wing Screenshot](img/zero-wing.png)

Benchmarks used in Allon Mureinik's "Somebody set up us the bomb" talk(s).

## Talks
* [FOSDEM 2022](https://fosdem.org/2022/schedule/event/somebody_set_up_us_the_bomb/)
* [DevConf.CZ 2022](https://devconfcz2022.sched.com/event/vvvF/lightning-talks)

## Requirements

This benchmark used [Node.js](https://nodejs.org/en/). It was executed using Node.js 17.0.1, but will probably work with 
any reasonably new Node.js version.

## Installation

```shell
npm install
```

## Execution

### XML example
```shell
node generate-xml-benchmark.js
```

### YAML example
```shell
node generate-yaml-benchmark.js
```

This will print out a CSV to stdout which can later be used to generate graphs/reports.
