import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitationService } from '../invitation.service';
import { Invitation } from '../invitation';
<<<<<<< HEAD
import { Player } from '../../user/player';
=======
import {Player} from '../../user/player';
>>>>>>> 0172fa223410fb39c6459fc448acc32626f56355

@Component({
  selector: 'app-invitation-detail',
  templateUrl: './invitation-detail.component.html'
})
export class InvitationDetailComponent implements OnInit {
  public invitation: Invitation = new Invitation();

  constructor(private route: ActivatedRoute,
              private invitationService: InvitationService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.invitationService.get(id).subscribe(
      invitation => {
        this.invitation = invitation;
        this.invitation.getRelation(Player, 'playerInvited').subscribe(
          playerInvited => this.invitation.playerInvited = playerInvited
        );
        this.invitation.getRelation(Player, 'playerWhoInvited').subscribe(
          playerWhoInvited => this.invitation.playerWhoInvited = playerWhoInvited
        );
      });
  }

  public delete() {
    this.invitationService.delete(this.invitation).subscribe(
      () => this.router.navigate(['invitation']));
  }
}
