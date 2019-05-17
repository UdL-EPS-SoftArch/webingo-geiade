import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../card-service';
import { Card } from '../card';
import {Player} from '../../user/player';
import {PlayerService} from '../../user/player.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {

  public card: Card;
  public players: Player[] = [];

  constructor(private router: Router,
              private cardService: CardService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.card = new Card();
    this.playerService.getAll()
      .subscribe(
        players => {
          this.players = players;
      });
  }

  delete(): void {
    this.cardService.delete(this.card).subscribe(
      () => this.router.navigate(['cards']));

  }
}
