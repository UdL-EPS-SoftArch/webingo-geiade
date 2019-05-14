import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../card-service';
import {Card} from '../card';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  public cards: Card[] = [];
  public totalCards = 0;

  constructor(
    public router: Router,
    private cardService: CardService) {
  }

  ngOnInit() {
      this.cardService.getAll()
      .subscribe(
        cards => {
          this.cards = cards;
          this.totalCards = this.cards.length;
        });
  }

  showSearchResults(cards) {
    this.cards = cards;
  }

}
