// This file will never run, it's used with the "tsd" tool validate types

import {
  expectAssignable,
  expectType,
} from 'tsd';

import {
  $,
  ensureHTMLElement,
  ensureHTMLElements,
  getDataAttribute,
} from '../index.js';

// eslint-disable-next-line unicorn/prefer-query-selector
const elem0 = document.getElementById('foo');

if (elem0) {
  const node = elem0.parentNode;
  expectType<ParentNode | null>(node);

  // ******* ensureHTMLElement *******
  expectType<HTMLElement | undefined>(ensureHTMLElement(elem0));
  node && expectType<HTMLElement | undefined>(ensureHTMLElement(elem0));

  // ******* ensureHTMLElement *******
  expectType<HTMLElement[]>(ensureHTMLElements([elem0]));
  node && expectType<HTMLElement[]>(ensureHTMLElements([elem0]));
}

// ******* $ *******

const elem = $('.wow');

expectType<HTMLElement | undefined>(elem);
expectAssignable<Element | undefined>(elem);
expectAssignable<Node | undefined>(elem);

// ******* $ + element selector *******

const elemH1 = $('h1');

expectType<HTMLHeadingElement | undefined>(elemH1);
expectAssignable<HTMLElement | undefined>(elemH1);
expectAssignable<Element | undefined>(elemH1);
expectAssignable<Node | undefined>(elemH1);

// ******* $ + getDataAttribute *******

const attribute = elem && getDataAttribute(elem, 'foo');

expectType<string | undefined>(attribute);
