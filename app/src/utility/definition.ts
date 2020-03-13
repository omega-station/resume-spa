import { MutableRefObject, Dispatch, SetStateAction } from 'react';

type Element = HTMLElement | null;

type RefBoolean = MutableRefObject<boolean>;
type RefNumber = MutableRefObject<number>;
type RefString = MutableRefObject<string>;

type StateNumber = [number, Dispatch<SetStateAction<number>>];
type StateString = [string, Dispatch<SetStateAction<string>>];

export type { Element, RefBoolean, RefNumber, RefString, StateNumber, StateString };
