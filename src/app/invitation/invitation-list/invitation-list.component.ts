import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { InvitationService} from "../invitation.service";
import {Invitation} from "../invitation";


@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})

export class InvitationListComponent implements OnInit {
  public invitations: Invitation[] = [];
  public totalInvitations = 0;

  constructor(
    public router: Router,
    private invitationService: InvitationService) {
  }

  ngOnInit() {
    this.invitationService.getAll()
      .subscribe(
        invitations => {
          this.invitations = invitations;
          this.totalInvitations = this.invitations.length;
        });
  }

  showSearchResults(invitations) {
    this.invitations = invitations;
  }

}
