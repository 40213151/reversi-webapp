export const Disc = {
  EMPTY: 0,
  DARK: 1,
  LIGHT: 2,
} as const;

export type Disc = (typeof Disc)[keyof typeof Disc];

export function toDisc(value: number): Disc {
  return value as Disc;
}
