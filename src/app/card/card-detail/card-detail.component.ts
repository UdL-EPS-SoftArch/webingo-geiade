import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from '../card-service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  public card: Card = new Card();

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.get(id).subscribe(
      card => this.card = card);
  }

}
