import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../card-service';
import {Card} from '../card';
import {forkJoin} from 'rxjs';


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
    forkJoin(
      this.cardService.getAll())
      .subscribe(
        ([card1, card2]) => {
          this.cards = this.cards.concat(this.cards).sort(
            (a: Card, b: Card) => a.id.localeCompare(b.id)
          );
          this.totalCards = this.cards.length;
        });
  }

  showSearchResults(cards) {
    this.cards = cards;
  }

}
