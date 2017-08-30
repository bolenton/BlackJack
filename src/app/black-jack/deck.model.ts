import { Card } from "./card.model";

export class Deck {

    cards: Array<Card>;
    count: number;
    currentCard: number = 0;

    constructor() {
        this.initDeck();
        this.count = this.cards.length;
        this.shuffleDeck();
    }

    private initDeck() {
        let names = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
        let suits = ['hearts', 'hiamonds', 'hpades', 'clubs'];
        let cards: Array<Card> = [];
        
        // assign value numeric value of 10 to the facecards
        for (var s = 0; s < suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                let value = (n > 9) ? 10 : n + 1;
                cards.push(new Card(value, names[n], suits[s]));
            }
        }

        this.cards = cards;
    }

    private shuffleDeck() {
        let tempCard: Card; 
        let tempCardIndex: number; 

        // Shuffle the cards
        for (var i = 25; i >= 0; i--) {
            tempCardIndex = Math.floor(Math.random() * 52);
            tempCard = this.cards[i];
            this.cards[i] = this.cards[tempCardIndex];
            this.cards[tempCardIndex] = tempCard;
        }
    }

    dealCards(): Array<Card> {
        let startingCards: Array<Card> = [];

        for (var i = 0; i < 4; i++) 
            startingCards.push(this.drawCard());
        
        return startingCards
    }
     
    drawCard(): Card {
        let card = this.cards.pop();
        this.count = this.cards.length;
        return card;
    }

    
}
