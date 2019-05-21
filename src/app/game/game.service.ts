import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from 'angular4-hal-aot';
import { Game } from './game';
import {Card} from '../card/card';
import {CardService} from '../card/card-service';
import {Player} from "../user/player";
import {Router} from "@angular/router";

@Injectable()
export class GameService extends RestService<Game> {
  public card: Card;

  constructor(injector: Injector,
              private cardService: CardService,
              private router: Router) {
    super(Game, 'games', injector);
  }

  public findByNameContaining(text: string): Observable<Game[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByNameContaining', options);
  }

  public joinGame(game: Game): void {
    this.card = new Card();
    this.card.game = game;

    this.cardService.create(this.card).subscribe(
      (card: Card) => this.router.navigate([card.uri]));
  }
}
