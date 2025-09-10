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

## ⚠️ Version 2.0.0 Breaking Changes & Deprecations

**Many helpers are now deprecated in favor of modern DOM APIs.**

### Deprecated functions and their modern replacements

| Deprecated Function   | Use Instead (Modern DOM API)           |
|----------------------|-----------------------------------------|
| `hasClass`           | `element.classList.contains()`          |
| `addClass`           | `element.classList.add()`               |
| `removeClass`        | `element.classList.remove()`            |
| `toggleClass`        | `element.classList.toggle()`            |
| `appendChild`        | `element.append()`                      |
| `emptyElement`       | `element.replaceChildren()`             |
| `removeElement`      | `element.remove()`                      |
| `getDataAttribute`   | `element.dataset`                       |
| `setDataAttribute`   | `element.dataset`                       |
| `closestByClass`     | `element.closest()`                     |
| `is`                 | `element.matches()`                     |

These deprecated helpers are still available for backward compatibility, but you are encouraged to migrate to the standard DOM APIs for better performance and future compatibility.

### Other changes

- Function signatures now use more precise types (e.g. `ParentNode`, `HTMLElementTagNameMap`).
- `setAttributes` now sets attributes also to falsy non-null/undefined values.

## API

### Table of Contents

* [Querying & Traversing](#querying--traversing)
  * [$](#)
  * [$$](#)
  * ~~[closestByClass](#closestbyclass)~~
  * [elemByClass](#elembyclass)
  * [elemsByClass](#elemsbyclass)
  * ~~[is](#is)~~
* [Creation & Insertion](#creation--insertion)
  * [addText](#addtext)
  * ~~[appendChild](#appendchild)~~
  * [createChild](#createchild)
  * [createElement](#createelement)
  * [insertBefore](#insertbefore)
* [Attributes & Classes](#attributes--classes)
  * ~~[addClass](#addclass)~~
  * ~~[getDataAttribute](#getdataattribute)~~
  * ~~[hasClass](#hasclass)~~
  * ~~[removeClass](#removeclass)~~
  * [setAttributes](#setattributes)
  * ~~[setDataAttribute](#setdataattribute)~~
  * ~~[toggleClass](#toggleclass)~~
* [Manipulation & Removal](#manipulation--removal)
  * ~~[emptyElement](#emptyelement)~~
  * ~~[removeElement](#removeelement)~~
* [Types](#types)
  * [ElementContainer](#elementcontainer)

### Querying & Traversing

#### $()

Like `$$()`, but returns only a single HTML element. A thin wrapper around `querySelector`.

If one needs to match against the `context` container element itself, then use `elemByClass()` instead.

##### Syntax

```ts
$(selector, [context]) => HTMLElement | undefined
```

##### Arguments

* `selector` – _`string | Node`_ – A CSS selector string, or a node.
* `context` – _`ParentNode`_ – Optional context from which to search. Defaults to `document`.

##### Returns

A single `HTMLElement` or `undefined` if no match is found.

#### $$()

Get an array of HTML elements that matches the specified selector. A thin wrapper around `querySelectorAll`.

##### Syntax

```ts
$$(selector, [context]) => HTMLElement[]
```

##### Arguments

* `selector` – _`string | Node[] | NodeListOf<Node>`_ – A CSS selector string, or an array/NodeList of nodes.
* `context` – _`ParentNode`_ – Optional context from which to search. Defaults to `document`.

##### Returns

An array of `HTMLElement`s.

#### closestByClass()

> [!WARNING]
> **Deprecated:** Use `element.closest()` instead.

Iterates over the parents of a node and returns the first one that has the specified class name.

##### Syntax

```ts
closestByClass(elem, className) => HTMLElement | undefined
```

##### Arguments

* `elem` – _`Node`_
* `className` – _`string`_

##### Returns

A single `HTMLElement` or `undefined` if no match is found.

#### elemByClass()

Like `$()`, but with class name rather than selector + also matches against the context itself, not just elements within it.

##### Syntax

```ts
elemByClass(className, [context]) => HTMLElement | undefined
```

##### Arguments

* `className` – _`string`_
* `context` – _`ParentNode`_

#### elemsByClass()

Like `elemByClass()` but returns an array of all matching elements within the context.

##### Syntax

```ts
elemsByClass(className, [context]) => HTMLElement[]
```

##### Arguments

* `className` – _`string`_
* `context` – _`ParentNode`_

##### Returns

An array of `HTMLElement`s.

#### is()

> [!WARNING]
> **Deprecated:** Use `element.matches()` instead.

Checks if an element matches a given selector.

##### Syntax

```ts
is(elem, selector) => boolean
```

##### Arguments

* `elem` – _`Element`_
* `selector` – _`string`_

##### Returns

A `boolean`

### Creation & Insertion

#### addText()

Adds text nodes to the supplied element, persisting newlines by adding `<br>` elements for each newline.

##### Syntax

```ts
addText(elem, text) => void
```

##### Arguments

* `elem` – _`Element`_
* `text` – _`string`_

#### appendChild()

> [!WARNING]
> **Deprecated:** Use `element.append()` instead.

Helper to append many children nodes at once.

##### Syntax

```ts
appendChild(elem, ...children) => void
```

##### Arguments

* `elem` – _`ParentNode`_
* `children` – _`...Node`_

#### createChild()

Like `createElement()`, but also appends the created element to a container.

##### Syntax

```ts
createChild(elem, tag, [classNameOrAttributes], [text]) => HTMLElement
```

##### Arguments

* `elem` – _`ParentNode`_
* `tag` – _`keyof HTMLElementTagNameMap`_
* `classNameOrAttributes` – _`string | string[] | { [attributeName: string]: string }`_
* `text` – _`string`_

##### Returns

The created `HTMLElement`.

#### createElement()

Helper to easily create a new HTML element, with all that one would need for that.

##### Syntax

```ts
createElement(tag, [classNameOrAttributes], [text]) => HTMLElement
```

##### Arguments

* `tag` – _`keyof HTMLElementTagNameMap`_
* `classNameOrAttributes` – _`string | string[] | { [attributeName: string]: string }`_
* `text` – _`string`_

##### Returns

The created `HTMLElement`.

#### insertBefore()

Inserts a child node before a given element.

##### Syntax

```ts
insertBefore(elem, child) => Node
```

##### Arguments

* `elem` – _`Node`_ – The node to insert before.
* `child` – _`Node`_ – The node to insert.

##### Returns

The inserted `child` node.

### Attributes & Classes

#### addClass()

> [!WARNING]
> **Deprecated:** Use `element.classList.add()` instead.

##### Syntax

```ts
addClass(elem, className) => void
```

##### Arguments

* `elem` – _`Element`_
* `className` – _`string`_

#### getDataAttribute()

> [!WARNING]
> **Deprecated:** Use `element.dataset` instead.

Helper that makes one don't have to do kebab case conversion oneself.

##### Syntax

```ts
getDataAttribute(elem, attribute) => string | undefined
```

##### Arguments

* `elem` – _`HTMLElement`_
* `attribute` – _`string`_ – Should be in kebab case.

#### hasClass()

> [!WARNING]
> **Deprecated:** Use `element.classList.contains()` instead.

##### Syntax

```ts
hasClass(elem, className) => boolean
```

##### Arguments

* `elem` – _`Element`_
* `className` – _`string`_

#### removeClass()

> [!WARNING]
> **Deprecated:** Use `element.classList.remove()` instead.

##### Syntax

```ts
removeClass(elem, className) => void
```

##### Arguments

* `elem` – _`Element`_
* `className` – _`string`_

#### setAttributes()

Helper to easily set a collection of attributes on an element.

##### Syntax

```ts
setAttributes(elem, attributes) => void
```

##### Arguments

* `elem` – _`Element`_
* `attributes` – _`{ [attributeName: string]: string }`_

#### setDataAttribute()

> [!WARNING]
> **Deprecated:** Use `element.dataset` instead.

Helper that makes one don't have to do kebab case conversion oneself.

##### Syntax

```ts
setDataAttribute(elem, attribute, value) => void
```

##### Arguments

* `elem` – _`HTMLElement`_
* `attribute` – _`string`_ – Should be in kebab case.
* `value` – _`string`_

#### toggleClass()

> [!WARNING]
> **Deprecated:** Use `element.classList.toggle()` instead.

##### Syntax

```ts
toggleClass(elem, className) => void
```

##### Arguments

* `elem` – _`Element`_
* `className` – _`string`_

### Manipulation & Removal

#### emptyElement()

> [!WARNING]
> **Deprecated:** Use `element.replaceChildren()` instead.

Iterates over all children in a container and removes them all.

##### Syntax

```ts
emptyElement(elem) => void
```

##### Arguments

* `elem` – _`ParentNode`_

#### removeElement()

> [!WARNING]
> **Deprecated:** Use `element.remove()` instead.

##### Syntax

```ts
removeElement(elem) => void
```

##### Arguments

* `elem` – _`ChildNode`_

### Types

#### ElementContainer

A type alias for a DOM element that can contain other elements.

```ts
export type ElementContainer = Document | DocumentFragment | Element;
```
