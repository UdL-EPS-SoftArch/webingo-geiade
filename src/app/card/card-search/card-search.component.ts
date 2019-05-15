import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardService } from '../card-service';
import { forkJoin } from 'rxjs';
import {Card} from '../card';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html'
})

export class CardSearchComponent {
  @Input() cards: Card[];
  @Output() emitResults: EventEmitter<any> = new EventEmitter();

  constructor(private cardService: CardService) {
  }

  performSearch(text: string): void {
    forkJoin(
      this.cardService.findByPlayerContaining(text))
    .subscribe(
      (cards) => {
        this.emitResults.emit(cards);
      });
  }
}

