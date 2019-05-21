import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {Game} from '../../game/game';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from '../card-service';
import {GameService} from '../../game/game.service';
import {Player} from '../../user/player';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  public card: Card = new Card();

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.get(id).subscribe(
      card => {
        this.card = card;
        this.card.getRelation(Game, 'game').subscribe(
          game => this.card.game = game
        );
        this.card.getRelation(Player, 'player').subscribe(
          player => this.card.player = player
        );
      });
  }

}
