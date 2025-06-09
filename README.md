# DOM Utils

Basic small typed DOM helpers that aids in the creation of vanilla JS code.

Makes it easy to query, create and modify DOM-nodes – consider it a mini-`jQuery`. Somewhat inspired by [Bliss.js](http://blissfuljs.com/).

Based on [`@hdsydsvenskan/dom-utils`](https://github.com/sydsvenskan/js-dom-utils) which was based on my personal utility functions.

[![npm version](https://img.shields.io/npm/v/@voxpelli/dom-utils.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/dom-utils)
[![npm downloads](https://img.shields.io/npm/dm/@voxpelli/dom-utils.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/dom-utils)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

## Usage

```javascript
import {
  $,
  createChild,
} from '@voxpelli/dom-utils';

const elem = $('.a-nice-selector');

createChild(elem, 'div', 'a-nice-selector__bemish-elem', 'With some nice text in it');
```

## Methods and types
