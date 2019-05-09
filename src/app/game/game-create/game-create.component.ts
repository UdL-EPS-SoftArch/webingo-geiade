import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../login-basic/user';
import {Game} from "../game";

@Component({
  selector: 'app-game-create'
  //templateUrl: '../game-form/game-form.component.html'
})
export class GameCreateComponent implements OnInit {
  public game: Game;

  constructor(private router: Router,) {
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit(): void {
    //this.GameService.create(this.game).subscribe(
     // (player: Player) => this.router.navigate([player.uri]));
  }
}
