import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from '../card-service';
import { Card } from '../card';
import {Player} from '../../user/player';
import {PlayerService} from '../../user/player.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {
  public card: Card = new Card();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cardService.get(this.id).subscribe(
      card => this.card = card);
  }

  delete(): void {
    this.cardService.delete(this.card).subscribe(
      () => this.router.navigate(['cards']));

  }
}
