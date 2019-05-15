import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import { Game } from '../game';
import {Player} from '../../user/player';
import {PlayerService} from '../../user/player.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {

  public game: Game;
  public players: Player[] = [];

  constructor(private router: Router,
              private cardService: GameService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.game = new Game();
    this.playerService.getAll()
      .subscribe(
        players => {
          this.players = players;
      });
  }

  onSubmit(): void {
    this.cardService.create(this.game).subscribe(
      (game: Game) => this.router.navigate([game.uri]));

  }
}
