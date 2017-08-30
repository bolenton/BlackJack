import { Card } from './card.model';
import { Component } from '@angular/core';
import { Deck } from "./deck.model";

@Component({
  selector: 'black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css']
})
export class BlackJackComponent  {
  deck: Deck; 
  cards: Array<Card>; 
  initialCards: Card[];
  initialCardsImages: string[];
  currentCard: Card; 
  currentCardimage: string; 

  constructor() { 
    this.deck = new Deck();
    this.cards = this.deck.cards;
    this.deal();
  } 

  deal(): void {
    let cards: Card[] = this.deck.dealCards();
    let cardImages: string[] = [];

    for (var i = 0; i < cards.length; i++) {
      let suit = this.cards[i].suit[0];
      let name = this.cards[i].name;
      name = (name.length > 1) ? name[0] : name
      
      cardImages[i] = `../../assets/cards/${suit}${name}.png`;
    }

    this.initialCardsImages = cardImages;
  }

  drawCard(): void {
    // Draw the card from the deck
    this.currentCard = this.deck.drawCard();
    
    // Display the card 
    let suit = this.currentCard.suit[0];
    let name = this.currentCard.name;
    name = (name.length > 1) ? name[0] : name
    this.currentCardimage = `../../assets/cards/${suit}${name}.png`
  }
}
