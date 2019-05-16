import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InvitationService} from "../invitation.service";
import {Invitation} from "../invitation";

@Component({
  selector: 'app-invitation-create',
  templateUrl: '../invitation-form/invitation-form.component.html'
})
export class InvitationCreateComponent implements OnInit {

  public invitation: Invitation;

  constructor(private router: Router,
              private invitationService: InvitationService) {
  }

  ngOnInit() {
    this.invitation = new Invitation();
  }

  onSubmit(): void {
    this.invitationService.create(this.invitation).subscribe(
      (invitation: Invitation) => this.router.navigate([invitation.uri]));

  }
}
