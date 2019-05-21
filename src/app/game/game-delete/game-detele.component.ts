import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html'
})
export class GameDeleteComponent implements OnInit {
  public game: Game = new Game();
  private id: string;
  private type: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gameService.get(this.id).subscribe(
      game => this.game = game);
  }

  delete() {
    this.gameService.delete(this.game).subscribe(
      () => this.router.navigate(['games']));
  }
}
