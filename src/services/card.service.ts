import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(@Inject(String) public suit: string, @Inject(String) public value: string) {}
}
