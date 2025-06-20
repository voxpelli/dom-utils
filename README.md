# DOM Utils

Basic small typed DOM helpers that aids in the creation of vanilla JS code.

Helps query, create and modify DOM-nodes. Like a mini-jQuery. Somewhat inspired by [Bliss.js](http://blissfuljs.com/).

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

## API

#### Table of Contents

-   [ElementContainer](#elementcontainer)
-   [ensureElementContainer](#ensureelementcontainer)
-   [ensureHTMLElement](#ensurehtmlelement)
-   [ensureHTMLElements](#ensurehtmlelements)
-   [$$](#)
-   [$](#-1)
-   [addText](#addtext)
-   [hasClass](#hasclass)
-   [removeClass](#removeclass)
-   [addClass](#addclass)
-   [toggleClass](#toggleclass)
-   [appendChild](#appendchild)
-   [setAttributes](#setattributes)
-   [removeElement](#removeelement)
-   [emptyElement](#emptyelement)
-   [getDataAttribute](#getdataattribute)
-   [setDataAttribute](#setdataattribute)
-   [createElement](#createelement)
-   [createChild](#createchild)
-   [closestByClass](#closestbyclass)
-   [elemByClass](#elembyclass)
-   [elemsByClass](#elemsbyclass)
-   [insertBefore](#insertbefore)

### ElementContainer

Type: ([Document](https://developer.mozilla.org/docs/Web/API/Document) \| [DocumentFragment](https://developer.mozilla.org/docs/Web/API/DocumentFragment) \| [Element](https://developer.mozilla.org/docs/Web/API/Element))

### ensureElementContainer

Mostly for internal use. Ensures that the node is of an element container type, mostly helps type validation

#### Parameters

-   `elem` **[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)**

Returns **([ElementContainer](#elementcontainer) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))**

### ensureHTMLElement

Mostly for internal use. Ensures that the node is an actual HTML element, mostly helps type validation

#### Parameters

-   `elem` **T**

### ensureHTMLElements

Mostly for internal use. Ensures that a list of nodes only contains HTML elements, mostly helps type validation

#### Parameters

-   `elems` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>**

### $$

Get an array of HTML elements that matches the specified selector

#### Parameters

-   `selector` **T**
-   `context` **[ElementContainer](#elementcontainer)?** If set, only looks up elements within the context container

### $

Like [$$](#), but returns only a single HTML element

If one needs to match against the context container element itself, then use [elemByClass](#elembyclass) instead

#### Parameters

-   `selector` **T**
-   `context` **[ElementContainer](#elementcontainer)?**

### addText

Adds text nodes to the supplied element, persisting newlines by adding br elements for each newline

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### hasClass

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### removeClass

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **void**

### addClass

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **void**

### toggleClass

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **void**

### appendChild

Helper to append many children nodes at once

#### Parameters

-   `elem` **[ElementContainer](#elementcontainer)**
-   `children` **...[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)**

### setAttributes

Helper to easily set a collection of attributes

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
-   `attributes`

### removeElement

#### Parameters

-   `elem` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**

Returns **void**

**Meta**

-   **deprecated**: Use element.remove() instead


### emptyElement

Iterates over all children in a container and removes them all

#### Parameters

-   `elem` **[ElementContainer](#elementcontainer)**

### getDataAttribute

Helper that makes one don't have to do kebab case conversion oneself

#### Parameters

-   `elem` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)**
-   `attribute` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Should be in kebab case

Returns **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))**

### setDataAttribute

Helper that makes one don't have to do kebab case conversion oneself

#### Parameters

-   `elem` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)**
-   `attribute` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Should be in kebab case
-   `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### createElement

Helper to easily create a new HTML element, with all that one would need for that

#### Parameters

-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `classNameOrAttributes`
-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

Returns **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)**

### createChild

Like [createElement](#createelement), but also appends the created element to a container

Helpful when creating multiple elements within one another as one can then send the result of one as the container to the other.

#### Parameters

-   `elem` **[ElementContainer](#elementcontainer)**
-   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `classNameOrAttributes`
-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

Returns **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)**

### closestByClass

Iterates over the parents of a node and returns the first one that has the specified class name

#### Parameters

-   `elem` **[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)**
-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **([HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))**

### elemByClass

Like [$](#), but with class name rather than selector + also matches against the context itself, not just elements within it

#### Parameters

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `context` **[ElementContainer](#elementcontainer)?**

Returns **([HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))**

### elemsByClass

Like [elemByClass](#elembyclass) but replaces [$$](#) instead and either returns the context itself if it matches, or a list of matching elements within it

#### Parameters

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `context` **[ElementContainer](#elementcontainer)?**

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)>**

### insertBefore

#### Parameters

-   `elem` **[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)**
-   `child` **T**

Returns **T**
