import { Injectable } from '@angular/core';
import { Card } from './game.interfaces'
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private deck: Card[] = [];
  private suits: string[] = ['h', 'd', 'c', 's'];
  private symbols: string[] = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

  private playersHand : Card[] = []
  private dealersHand : Card[] = []

  private values = {
    'ace': [1, 11],
    'two': [2],
    'three': [3],
    'four': [4],
    'five': [5],
    'six': [6],
    'seven': [7],
    'eight': [8],
    'nine': [9],
    'ten': [10],
    'jack': [10],
    'queen': [10],
    'king': [10],
  }

  constructor () {
    this.generateDeck();
    this.shuffleDeck();
  }
  private generateDeck(): void {
    for (const suit of this.suits){
      for (const symbol of this.symbols){
        this.deck.push({
          value: this.values[symbol as keyof typeof this.values],
          symbol: symbol,
          suit: suit,
          display: `${symbol}${suit}.svg`,
        })
      }
    }
  }

  private shuffleDeck(): void {
    for (let count = this.deck.length - 1; count > 0; count--) {
      const randomNumber = Math.floor(Math.random() * (count + 1));
      [this.deck[count], this.deck[randomNumber]] = [this.deck[randomNumber], this.deck[count]];
    }
  }

  private hit(): Card | undefined {
    return this.deck.pop()
  }

  public getPlayersHand(): Card[] {
    return this.playersHand
  }

  public getDealersHand(): Card[] {
    return this.dealersHand
  }

  private dealToHand(hand: Card[]): void {
    const card = this.hit();
    if (card !== undefined) {
      hand.push(card)
    } else {
      // do not add a undefined card to a hand
    }
  }

  public calculateHand(hand: Card[]): number {
    let total = 0;
    let aces = 0;
    if (hand.length > 0)
    for (const card of hand) {
      if (card.symbol === 'ace') {
        total += 11;
        aces += 1;
      } else {
        total += card.value[0];
      }
    }

    while (total > 21 && aces > 0) {
      total -= 10;
      aces -= 1;
    }

    return total;
  }

  private isBust(hand: Card[]): boolean {
    return this.calculateHand(hand) > 21;
  }

  public isGameOver(): boolean {
    return this.isBust(this.playersHand) || this.isBust(this.dealersHand) || this.calculateHand(this.playersHand) === 21 || this.calculateHand(this.playersHand) === 21;
  }

  public endingMessage(): string {
    const playerValue = this.calculateHand(this.playersHand);
    const dealerValue = this.calculateHand(this.dealersHand);

    if (playerValue > 21) {
      return 'You bust, Dealer wins';
    } else if (dealerValue > 21) {
      return 'Dealer bust, You wins';
    } else if (playerValue > dealerValue) {
      return 'You win';
    } else if (dealerValue > playerValue) {
      return 'Dealer wins';
    } else {
      return 'It’s a Push!';
    }
  }

  public isPlayerBusted(): boolean {
    return this.isBust(this.playersHand);
  }

  public dealToPlayer(): void {
    this.dealToHand(this.playersHand);
  }

  public dealToDealer(): void {
    this.dealToHand(this.dealersHand);
  }

  public dealerPlay(): void {
    while (this.calculateHand(this.dealersHand) < 17) {
      this.dealToDealer();
    }
  }

  public getDealersFirstCard(): Card {
    return this.dealersHand[0]
  }

  public resetGame(): void {
    this.deck = [];
    this.playersHand = [];
    this.dealersHand = [];
    this.generateDeck();
    this.shuffleDeck();
    this.dealToPlayer();
    this.dealToPlayer();
    this.dealToDealer();
  }

}
