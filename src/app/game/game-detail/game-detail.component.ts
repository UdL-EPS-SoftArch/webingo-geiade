import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {
  public game: Game = new Game();

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.get(id).subscribe(
      game => this.game = game);
  }

  public delete() {
    this.gameService.delete(this.game).subscribe(
      () => this.router.navigate(['games']));
  }
}
