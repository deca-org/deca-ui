import { theme, StitchesTheme } from '@lib/Theme/stitches.config';

export type Modify<T, R> = Omit<T, keyof R> & R;

export type ModifyDeep<A extends AnyObject, B extends DeepPartialAny<A>> = {
  [K in keyof A]: B[K] extends never
    ? A[K]
    : B[K] extends AnyObject
    ? ModifyDeep<A[K], B[K]>
    : B[K];
} & (A extends AnyObject ? Omit<B, keyof A> : A);

/** Makes each property optional and turns each leaf property into any, allowing for type overrides by narrowing any. */
export type DeepPartialAny<T> = {
  [P in keyof T]?: T[P] extends AnyObject ? DeepPartialAny<T[P]> : any;
};

export type AnyObject = Record<string, any>;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type DeepWriteable<T> = {
  -readonly [P in keyof T]: DeepWriteable<T[P]>;
};

export type ThemeKey<T extends keyof StitchesTheme> = keyof typeof theme[T];
