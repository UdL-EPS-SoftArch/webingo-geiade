import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../card-service';
import { Card } from '../card';
import {RestService} from 'angular4-hal-aot';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  public card: Card;

  constructor(// private router: Router,
              private cardService: CardService) {
  }

  ngOnInit() {
    this.card = new Card();
  }

  onSubmit(): void {
    /*this.cardService.create(this.card).subscribe(
      (card: Card) => this.router.navigate([card.uri]));*/

  }
}
