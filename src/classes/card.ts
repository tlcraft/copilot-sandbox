import { CardValue } from "../enums/card-value.enum";

export class Card {
  constructor(public suit: string, public value: CardValue) {}
}
