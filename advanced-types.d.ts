export type TypeOf$<K extends string | Node, D extends Node = HTMLElement> = (
  K extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[K]
    : (
        K extends string ? D : K
      )
);

export type TypeOf$$<
  K extends string | Node[] | NodeListOf<Node>,
  D extends Node = HTMLElement
> =
  K extends string
    ? TypeOf$<K, D> :
    K extends NodeListOf<infer U>
      ? TypeOf$<U, D> :
      K extends Array<infer U>
        ? (U extends Node ? TypeOf$<U, D> : never) :
        never;
